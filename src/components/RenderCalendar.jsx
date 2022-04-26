import React, { useState } from "react";
import { useSelector } from "react-redux";
import getLocalStorageData from "../services/getLocalStorage";

const RenderCalendar = ({ takeId, openForm, date }) => {
  const calendar = useSelector((state) => state.calendarReducer);

  const prevLastDay = new Date(calendar.year, calendar.month, 0).getDate();

  const lastDay = new Date(calendar.year, calendar.month + 1, 0).getDate();

  const firstDayIndex = new Date(calendar.year, calendar.month, 1).getDay();

  const lastDayIndex = new Date(calendar.year, calendar.month + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const currMonth = calendar.month + 1;
  const currYear = calendar.year;

  const taskList = getLocalStorageData();

  let idArr = Object.keys(taskList);

  let dayArr = [];

  /**
   * 
   [
    { 
      date: new Date(currYear, currMonth, index),
      year: currYear,
      month: currMonth,
      day: index,
      task: []
    }
   ]
   *
   **/

  for (let index = 1; index <= lastDay; index++) {
    dayArr.push({
      date: new Date(new Date().getFullYear(), new Date().getMonth(), index),
      month: currMonth,
      day: index,
    });
    if (index <= firstDayIndex) {
      dayArr.unshift({
        date: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
          prevLastDay - index + 1
        ),
        month: currMonth - 1,
        day: prevLastDay - index + 1,
      });
    }
    if (index === lastDay) {
      for (let j = 1; j <= nextDays; j++) {
        dayArr.push({
          date: new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            j
          ),
          month: currMonth + 1,
          day: j,
        });
      }
    }
  }

  return (
    <div className="days height-custom grid-7 text-white" id="days">
      {dayArr.map((obj) => {
        let id =
          obj.month === currMonth
            ? calendar.year + "" + currMonth + "" + obj.day
            : obj.month === currMonth + 1
            ? calendar.year + "" + (currMonth + 1) + "" + obj.day
            : calendar.year + "" + (currMonth - 1) + "" + obj.day;

        let dateString =
          obj.month === currMonth
            ? new Date(calendar.year, calendar.month, obj.day)
            : obj.month === currMonth + 1
            ? new Date(calendar.year, calendar.month + 1, obj.day)
            : new Date(calendar.year, calendar.month - 1, obj.day);
        return (
          <div
            className={
              obj.day === calendar.day &&
              currMonth === new Date().getMonth() + 1 &&
              currYear === new Date().getFullYear()
                ? "day today w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
                : date === dateString.toDateString()
                ? "day active w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
                : "day w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
            }
            key={id}
            id={dateString.toDateString()}
            onClick={(e) => takeId(e)}
            onDoubleClick={openForm}
          >
            <div
              className={
                obj.month === calendar.month + 1
                  ? "day-item"
                  : "day-item opacity--1"
              }
              onDoubleClick={openForm}
            >
              {obj.day}
            </div>
            {idArr.map((idDay) => {
              if (id === idDay) {
                let num = 0;
                return (
                  <div key={id}>
                    {taskList[id].map((data, index) => {
                      num++;
                      if (index < 2) {
                        return (
                          <p
                            className="fs--2 overflow-hidden task-name each-task"
                            key={id + index}
                            onClick={openForm}
                          >
                            {data}
                          </p>
                        );
                      }
                    })}
                    {num > 2 && (
                      <p
                        className="fs--2 overflow-hidden task-name each-task"
                        key={id}
                        onClick={openForm}
                      >
                        +{num - 2} more...
                      </p>
                    )}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default RenderCalendar;
