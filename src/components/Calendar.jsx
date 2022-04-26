import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Form from "./Form";
import RenderCalendar from "./RenderCalendar";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState();
  const [isUpdate, setIsUpdate] = useState(false);

  const openForm = () => {
    setIsOpen(!isOpen);
  };

  const takeId = (e) => {
    const idDay = e.currentTarget.id;
    setDate(idDay);
  };

  const updateTaskOnEachDay = (trueOrFalse) => {
    setIsUpdate(!trueOrFalse);
  };

  return (
    <div className="calendar">
      <NavBar openForm={openForm} />
      <Form
        isOpen={isOpen}
        openForm={openForm}
        date={date}
        isUpdate={isUpdate}
        updateTaskOnEachDay={updateTaskOnEachDay}
      />
      <div>
        <div className="weekdays grid-7 text-uppercase text-white">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <RenderCalendar takeId={takeId} openForm={openForm} date={date} />
      </div>
    </div>
  );
};

export default Calendar;
