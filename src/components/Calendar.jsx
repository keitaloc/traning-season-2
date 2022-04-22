import React, { useEffect, useState } from "react";
import NavBar from "./Navbar";
import Form from "./Form";
import RenderCalendar from "./RenderCalendar";

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    console.log("open form");
    setIsOpen(!isOpen);
  };

  

  return (
    <div className="calendar">
      <NavBar openForm={openForm} />
      <Form isOpen={isOpen} openForm={openForm} />
      <div className="pt-4">
        <div className="weekdays grid-7 text-uppercase text-white">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        <RenderCalendar />
      </div>
    </div>
  );
};

export default Calendar;
