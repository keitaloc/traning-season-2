const TaskList = ({ list, id }) => {
  return (
    <div class="task-item d-flex justify-content-between align-items-center pb-2">
      <p class="me-3">{data}</p>
      <button
        class="btn btn-danger p-3 fs-3"
        id="delete-btn"
        onClick={deleteTask(index, id)}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskList;
