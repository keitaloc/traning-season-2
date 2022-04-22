import React, { useState } from "react";
import getLocalStorageData from "../services/getLocalStorage";
import TaskList from "./TaskList";

const Form = ({ isOpen, openForm, date }) => {
  const [input, setInput] = useState("");

  if (!date) {
    date = new Date().toDateString();
  }

  console.log("----form----");

  const convertDate = (newDate) => {
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    // convert id -> yyyymmdd
    const idDay = year + "" + month + "" + day;

    return idDay;
  };

  // convert string 'Fri Apr 22 2022' to date
  let newDate = new Date(date);
  // convert date to string yyyymmdd
  let id = convertDate(newDate);

  let taskList = getLocalStorageData();

  const addInput = (e) => {
    setInput(e.target.value);
  };

  const addNewTask = () => {
    if (!taskList[id]) {
      // create new data
      taskList[id] = [];

      // push content from input
      taskList[id].push(input);
    } else {
      taskList[id].push(input);
    }

    // update task list after input new content
    taskList = { ...taskList, [id]: taskList[id] };

    // add to local storage
    localStorage.setItem("New Task", JSON.stringify(taskList));

    // after successfully added new task
    setInput("");
  };

  const showListTaskOnForm = () => {};

  return (
    <>
      {isOpen && (
        <>
          <div className="bg-overlay"></div>
          <div
            className="abs-center top--31 left-50 text-white w-50 p-5 z-index--9999 fs--2 form"
            id="Form"
          >
            <div className="d-flex justify-content-between align-items-center pt-1 pb-1">
              <p className="dmy" id="dayOnForm">
                {date}
              </p>
              <i
                className="btn scale text-white fa-light fa-x fs--1"
                onClick={openForm}
                id="close-btn"
              ></i>
            </div>

            <div className="new-task d-flex justify-content-between pt-5 pb-5">
              <input
                className="input-group ps-3 pe-3 me-3 pt-3 pb-3 outline-none mr-3 p-2 fs--1"
                type="text"
                value={input}
                onChange={(e) => {
                  addInput(e);
                }}
                placeholder="add new task"
                id="inputTask"
              />
              <button
                className="btn btn-1 color-f pr-2 pl-2 fs--1 w--6"
                id="addTask"
                onClick={addNewTask}
              >
                Add
              </button>
            </div>

            <div className="" id="lists">
              <TaskList id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
