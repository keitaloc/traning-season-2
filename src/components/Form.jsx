import React, { useEffect, useRef, useState } from "react";
import getLocalStorageData from "../services/getLocalStorage";
import TaskList from "./TaskList";

const Form = ({ isOpen, openForm, date }) => {
  const [input, setInput] = useState("");
  // const inputTask = useRef(null);

  // useEffect(() => {
  //   inputTask.current.focus();
  // });

  if (!date) {
    date = new Date().toDateString();
  }

  const closedForm = () => {
    setInput("");
    openForm();
  };

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
    console.log("add new task");

    if (!date) {
      alert("Have to choose day");
      return;
    }

    if (!input) {
      alert("Have to insert input!");
      return;
    }

    if (!taskList[id]) {
      // create new data
      taskList[id] = [];

      console.log(id);
      console.log(taskList[id]);

      // push content from input
      taskList[id].push(input);
    } else {
      taskList[id].push(input);
    }

    // update task list after input new content
    taskList = { ...taskList, [id]: taskList[id] };

    // add to local storage
    localStorage.setItem("New Task", JSON.stringify(taskList));

    setInput("");
  };

  return (
    <>
      {isOpen && (
        <>
          <div className="bg-overlay"></div>
          <div className="abs-center top--31 left-50 text-white w-50 p-5 z-index--9999 fs--2 form">
            <div className="d-flex justify-content-between align-items-center pt-1 pb-1">
              <p className="dmy" id="dayOnForm">
                {date}
              </p>
              <i
                className="btn scale text-white fa-light fa-x fs--1"
                onClick={closedForm}
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
                // ref={inputTask}
              />
              <button
                className="btn btn-1 color-f pr-2 pl-2 fs--1 w--6"
                onClick={addNewTask}
              >
                Add
              </button>
            </div>

            <div>
              <TaskList id={id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
