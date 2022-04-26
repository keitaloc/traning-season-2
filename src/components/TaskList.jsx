import getLocalStorageData from "../services/getLocalStorage";

const TaskList = ({ id, editTask, deleteTask, isEdit, cancleEdit }) => {
  let taskList = getLocalStorageData();
  if (!taskList[id]) return;

  return (
    <>
      {taskList[id].map((data, index) => {
        return (
          <div
            className="task-item d-flex justify-content-between align-items-center pt-2"
            key={id + index}
          >
            <p className="me-3 fs--1-half text-start" key={id}>
              {data}
            </p>
            <div className="btn-show">
              {!isEdit ? (
                <>
                  <button
                    className="btn btn-info w--50 mx-2 p-3 fs-3"
                    onClick={() => editTask(data, index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger w--50 p-3 fs-3"
                    onClick={() => deleteTask(index, id)}
                  >
                    Delete
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-info w--50 mx-2 p-3 fs-3"
                    onClick={() => cancleEdit(index, id)}
                  >
                    Cancle
                  </button>
                  <button className="btn btn-disable w--50 p-3 fs-3" disabled>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
