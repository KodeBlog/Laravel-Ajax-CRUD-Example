$(document).ready(function() {
    $("#btn-add").click(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'POST',
            url: '/tasks',
            data: {
                task: $("#frmAddTask input[name=task]").val(),
                description: $("#frmAddTask input[name=description]").val(),
            },
            dataType: 'json',
            success: function(data) {
                $('#frmAddTask').trigger("reset");
                $("#frmAddTask .close").click();
                window.location.reload();
            },
            error: function(data) {
                var errors = $.parseJSON(data.responseText);
                $('#add-task-errors').html('');
                $.each(errors.messages, function(key, value) {
                    $('#add-task-errors').append('<li>' + value + '</li>');
                });
                $("#add-error-bag").show();
            }
        });
    });
    $("#btn-edit").click(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'PUT',
            url: '/tasks/' + $("#frmEditTask input[name=task_id]").val(),
            data: {
                task: $("#frmEditTask input[name=task]").val(),
                description: $("#frmEditTask input[name=description]").val(),
            },
            dataType: 'json',
            success: function(data) {
                $('#frmEditTask').trigger("reset");
                $("#frmEditTask .close").click();
                window.location.reload();
            },
            error: function(data) {
                var errors = $.parseJSON(data.responseText);
                $('#edit-task-errors').html('');
                $.each(errors.messages, function(key, value) {
                    $('#edit-task-errors').append('<li>' + value + '</li>');
                });
                $("#edit-error-bag").show();
            }
        });
    });
    $("#btn-delete").click(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: 'DELETE',
            url: '/tasks/' + $("#frmDeleteTask input[name=task_id]").val(),
            dataType: 'json',
            success: function(data) {
                $("#frmDeleteTask .close").click();
                window.location.reload();
            },
            error: function(data) {
                console.log(data);
            }
        });
    });
});

function addTaskForm() {
    $(document).ready(function() {
        $("#add-error-bag").hide();
        $('#addTaskModal').modal('show');
    });
}

function editTaskForm(task_id) {
    $.ajax({
        type: 'GET',
        url: '/tasks/' + task_id,
        success: function(data) {
            $("#edit-error-bag").hide();
            $("#frmEditTask input[name=task]").val(data.task.task);
            $("#frmEditTask input[name=description]").val(data.task.description);
            $("#frmEditTask input[name=task_id]").val(data.task.id);
            $('#editTaskModal').modal('show');
        },
        error: function(data) {
            console.log(data);
        }
    });
}

function deleteTaskForm(task_id) {
    $.ajax({
        type: 'GET',
        url: '/tasks/' + task_id,
        success: function(data) {
            $("#frmDeleteTask #delete-title").html("Delete Task (" + data.task.task + ")?");
            $("#frmDeleteTask input[name=task_id]").val(data.task.id);
            $('#deleteTaskModal').modal('show');
        },
        error: function(data) {
            console.log(data);
        }
    });
}