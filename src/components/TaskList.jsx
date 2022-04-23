import { useState } from "react";
import getLocalStorageData from "../services/getLocalStorage";

const TaskList = ({ id }) => {
  console.log("----task list----");

  let taskList = getLocalStorageData();
  if (!taskList[id]) return;

  const editTask = (index, id) => {
    console.log("edit task");
  };

  const deleteTask = (index, id) => {
    console.log("delete task");

    taskList[id].splice(index, 1);

    console.log(taskList[id]);

    // update task list after input new content
    taskList = { ...taskList, [id]: taskList[id] };

    // updated on localstorage
    localStorage.setItem("New Task", JSON.stringify(taskList));
  };

  return (
    <>
      {taskList[id].map((data, index) => {
        return (
          <div
            className="task-item d-flex justify-content-between align-items-center pb-2"
            key={index}
          >
            <p className="me-3 fs--1-half text-start">{data}</p>
            <div>
              <button
                className="btn btn-info w--50 mx-2 p-3 fs-3"
                onClick={() => editTask(index, id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger w--50 p-3 fs-3"
                onClick={() => deleteTask(index, id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
