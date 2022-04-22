import getLocalStorageData from "../services/getLocalStorage";

const TaskList = ({ id }) => {
  console.log("----task list----");
  console.log(id);

  const taskList = getLocalStorageData();

  console.log(taskList);

  const editTask = (index, id) => {};
  const deleteTask = (index, id) => {};

  return (
    <>
      {taskList[id].map((data, index) => {
        console.log("----log data of each day----");
        console.log(data);
        return (
          <>
            <div className="task-item d-flex justify-content-between align-items-center pb-2">
              <p className="me-3 fs--1-half text-start">{data}</p>
              <div>
                <button
                  className="btn btn-info w--50 mx-2 p-3 fs-3"
                  id="delete-btn"
                  onClick={editTask(index, id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger w--50 p-3 fs-3"
                  id="delete-btn"
                  onClick={deleteTask(index, id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TaskList;
