import { useEffect, useState } from "react";
import getLocalStorageData from "../services/getLocalStorage";

const TaskList = ({ id, isDeleted, deleteTask }) => {
  console.log("----task list----");

  let taskList = getLocalStorageData();
  if (!taskList[id]) return;

  const editTask = (index, id) => {
    // console.log("edit task");
  };

  return (
    <>
      {taskList[id].map((data, index) => {
        return (
          <div
            className="task-item d-flex justify-content-between align-items-center pt-2"
            key={id + index}
          >
            <p className="me-3 fs--1-half text-start" key={id + index}>
              {data}
            </p>
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
