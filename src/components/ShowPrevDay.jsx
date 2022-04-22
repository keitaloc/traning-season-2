import React from "react";

export default class showPrevDay extends React.Component {
  render() {
    const showPrevDay = () => {
      console.log("--------show prev day---------");

      let prevDay = [];

      for (let x = firstDayIndex; x > 0; x--) {
        let newDate = new Date(
          date.getFullYear(),
          date.getMonth() - 1,
          prevLastDay - x + 1
        );

        prevDay.push(
          <div
            className="day pre-date w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
            key={newDate.toDateString()}
          >
            <div
              className="prev-date day-item"
              data-id={newDate.toDateString()}
            >
              {prevLastDay - x + 1}
            </div>
            {/* {showTaskOnEachDay(newDate)} */}
          </div>
        );

        // get current date of current month when show prev month calendar
        // document.querySelectorAll(".dmy").forEach((day) => {
        //   day.innerHTML = new Date(
        //     date.getFullYear(),
        //     date.getMonth(),
        //     new Date().getDate()
        //   ).toDateString();
        // });
      }

      return prevDay;
    };

    return (
      <>
        <div
          className="day pre-date w-100 h--15 overflow-hidden bg-item border-item d-flex flex-column"
          key={newDate.toDateString()}
        >
          <div className="prev-date day-item" data-id={newDate.toDateString()}>
            {prevLastDay - x + 1}
          </div>
          {/* {showTaskOnEachDay(newDate)} */}
        </div>
      </>
    );
  }
}
