import React from "react";
import { useSelector } from "react-redux";

const RenderCalendar = ({ takeId }) => {
  console.log("-----calendar-----");

  const calendar = useSelector((state) => state.calendarReducer);
  const data = useSelector((state) => state.dataReducer);

  const prevLastDay = new Date(calendar.year, calendar.month, 0).getDate();

  const lastDay = new Date(calendar.year, calendar.month + 1, 0).getDate();

  const firstDayIndex = new Date(calendar.year, calendar.month, 1).getDay();

  const lastDayIndex = new Date(calendar.year, calendar.month + 1, 0).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const currMonth = calendar.month + 1;
  const currYear = calendar.year;

  let dayArr = [];

  for (let index = 1; index <= lastDay; index++) {
    dayArr.push({ month: currMonth, day: index });
    if (index <= firstDayIndex) {
      dayArr.unshift({ month: currMonth - 1, day: prevLastDay - index + 1 });
    }
    if (index === lastDay) {
      for (let j = 1; j <= nextDays; j++) {
        dayArr.push({ month: currMonth + 1, day: j });
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
            ? new Date(
                calendar.year,
                calendar.month,
                obj.day
              )
            : obj.month === currMonth + 1
            ? new Date(
                calendar.year,
                calendar.month + 1,
                obj.day
              )
            : new Date(
                calendar.year,
                calendar.month - 1,
                obj.day
              );
        return (
          <div
            className={
              obj.day === calendar.day &&
              currMonth === new Date().getMonth() + 1 &&
              currYear === new Date().getFullYear()
                ? "day today w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
                : "day w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
            }
            key={id}
            id={dateString.toDateString()}
            onClick={(e) => takeId(e)}
          >
            <div
              className={
                obj.month === calendar.month + 1
                  ? "day-item"
                  : "day-item opacity--1"
              }
            >
              {obj.day}
            </div>
            {/* {showTaskOnEachDay(newDate)} */}
          </div>
        );
      })}
    </div>
  );
};

export default RenderCalendar;
