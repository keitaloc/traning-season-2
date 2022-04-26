import {handleNextMonth, handlePrevMonth} from "./../actions/change_month";
import { useDispatch, useSelector } from "react-redux";


function ChangeMonth(){
    const dispatch = useDispatch();
    const day = useSelector((state) => state.month);
    console.log(day)
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
    return(
        <div className="d-flex justify-content-between mt-4 align-items-center">
                    <div className="prev">
                        <i className="fas fa-chevron-left cursor-pointer " onClick = {()=>dispatch(handlePrevMonth())}></i>
                    </div>
                    
                    <div>
                        <h1><span className="month-picker h1">{months[day.month]}</span>&emsp;<span className="year h1">{day.year}</span> </h1>
                    </div>
                    <div className="next">
                        <i className="fas fa-chevron-right cursor-pointer " onClick = {()=>dispatch(handleNextMonth())}></i>
                    </div>
                    
                </div>
    )
}
export default ChangeMonth;