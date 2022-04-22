import React from "react";
import { useSelector } from "react-redux";

const Form = ({ isOpen, openForm }) => {
  const calendar = useSelector((state) => state.calendarReducer);

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
                {calendar.date.toDateString()}
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
                placeholder="add new task"
                id="inputTask"
              />
              <button
                className="btn btn-1 color-f pr-2 pl-2 fs--1 w--6"
                id="addTask"
              >
                Add
              </button>
            </div>

            <div className="" id="lists">
              {/* <div
              className="task-item d-flex justify-content-between align-items-center"
              >
              <p className="flex-wrap">task 1</p>
              <button className="btn btn-danger" id="delete-btn">Delete</button>
            </div>  */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Form;
