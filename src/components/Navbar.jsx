import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextMonth, prevMonth, currMonth } from "../redux/actions";

const NavBar = ({ openForm }) => {
  const calendar = useSelector((state) => state.calendarReducer);
  const dispatch = useDispatch();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[calendar.month];
  const currDate = calendar.date.toDateString();

  return (
    <div className="navbar d-flex justify-content-between align-items-center">
      <div className="nav d-flex justify-content-between align-items-center">
        <i
          onClick={() => dispatch(prevMonth())}
          className="fas fa-angle-left pr-3 scale"
          id="prev"
        ></i>
        <i
          onClick={() => dispatch(nextMonth())}
          className="fas fa-angle-right px-3 scale"
          id="next"
        ></i>
        <div className="date px-3">
          <h1 id="month">{month}</h1>
          <p className="dmy" id="dayOnPage">
            {currDate}
          </p>
        </div>
      </div>

      <div className="open-form">
        <button
          className="btn btn-light w--10 p-3 border-0 fs--2 btn-hover mx-1 fw--5"
          id="create-btn"
          onClick={openForm}
        >
          Create
        </button>
      </div>

      <div className="">
        <button
          className="btn btn-light border-0 me-2 p-3 fw--5 mx-2 fs--2 w--10 btn-hover"
          id="monthBtn"
          onClick={() => dispatch(currMonth())}
        >
          Today
        </button>
        <button
          className="btn btn-light border-0 p-3 fs--2 w--10 fw--5 btn-hover"
          id="yearBtn"
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default NavBar;
