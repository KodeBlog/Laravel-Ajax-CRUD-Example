    <!-- Add Task Modal Form HTML -->
    <div id="addTaskModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content">
                <form id="frmAddTask">
                    <div class="modal-header">                      
                        <h4 class="modal-title">Add New Task</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <div id="add-error-bag" class="alert alert-danger">
                            <ul id="add-task-errors">
                            </ul>
                        </div>                     
                        <div class="form-group">
                            <label>Task</label>
                            <input type="text" id="task" name="task" class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label>Description</label>
                            <input type="text" id="description" name="description" class="form-control" required>
                        </div>                 
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                        <button type="button" class="btn btn-info" id="btn-add" value="add">Add New Task</button>
                    </div>
                </form>
            </div>
        </div>
    </div>