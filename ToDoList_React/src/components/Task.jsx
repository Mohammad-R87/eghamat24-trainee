function Task({tasks, completeTask, removeTask}) {
    return tasks.map((task, index) => (
        <div
            className={task.isComplete ? 'border-success d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 item task_animation' : 'border-danger d-flex align-items-center justify-content-between list-group-item-action mt-2 p-1 item task_animation'}
            key={index}>
            <p className={task.isComplete ? 'disabled d-flex align-items-center justify-content-center m-0 p-3' : 'd-flex align-items-center justify-content-center m-0 p-3'}
               key={task.id}
               onClick={() => completeTask(task.id)}>
                {task.title}
            </p>
            <div className="d-flex align-items-center">
                <button onClick={() => removeTask(task.id)} className="btn btn-danger btn-action text-center mr-2">
                    <i className="fa-solid fa-trash-can"></i>
                </button>
                <button className="btn btn-success btn-action text-center mr-2">
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
            </div>
        </div>
    ));
}

export default Task;