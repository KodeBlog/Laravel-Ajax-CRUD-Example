    <!-- Delete Task Modal Form HTML -->
    <div id="deleteTaskModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form id="frmDeleteTask">
                    <div class="modal-header">                      
                        <h4 id="delete-title" name="title" class="modal-title">Delete Task</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">                    
                        <p>Are you sure you want to delete this task?</p>
                        <p class="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div class="modal-footer">
                        <input type="hidden" id="task_id" name="task_id" value="0">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <button type="button" class="btn btn-danger" id="btn-delete">Delete Task</button>
                    </div>
                </form>
            </div>
        </div>
    </div>