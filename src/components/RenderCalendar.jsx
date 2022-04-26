import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lastMonth, nextMonth } from '../redux/actions';
import Todo from './Todo';

const RenderCalendar = () => {
    const dispatch = useDispatch();
    const months = useSelector((state) => state.months);
    const year = useSelector((state) => state.year);

    console.log(months,year);

    const [model,setModel] = useState(false);

    const date= new Date();

    date.setDate(1)


    const arrMonths = [
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

    // const months = date.getMonth()+1
    // date.getMonth()+1,0).getDate()



    const lastDays = new Date(date.getFullYear(), months+1,0).getDate();  //tong ngay trong thang 30

    const prevLastDay = new Date(date.getFullYear(), months,0).getDate();  //tong thang sau 31


    const firstDayIndex = new Date(year,months,1).getDay() //ngay trong tuan +1 (5)

    const lastDayIndex = new Date(date.getFullYear(), months+1,0).getDay(); //thu hien tai (6)
    

    const nextDays = 7 - lastDayIndex - 1; //ngay thang sau

    const [show ,setShow] = useState()

    const handleDate = (id) =>{
        setShow(id);
    }

    console.log('show',show);

    const showDayBefore = ()=>{
        const arrDayBefore = [];
        for(let i=0; i<=firstDayIndex -1; i++){
            arrDayBefore.unshift(prevLastDay - i);
        }
        const result = arrDayBefore.map((item,index)=>{
            return(
                <div className="days" key={index}>
                    <div className="first-day">
                        <p>{item}</p>
                    </div>
                    <ul className="day-content">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            )
       })
       return result;
    };


    const showDay = ()=>{
        const arrDay = [];
        for(let i=1; i<=lastDays ; i++){
            arrDay.push(i);
        }
        const result = arrDay.map((item,index)=>{
            if(item === new Date().getDate()){
                return(
                    <div  className="todays" key={index} onClick={handleModel}>
                        <div onClick={(e)=>{handleDate(new Date(date.getFullYear(),months,item).toDateString())}} >
                            <div className="day" >
                                <p>{item}</p>
                            </div>
                            <ul className="day-content">
                                <li></li>
                            </ul>
                        </div>
                    </div>
                )
            }else{
               return(
                    <div className="days" onClick={handleModel} key={index} >
                        <div onClick={(e)=>{handleDate(new Date(date.getFullYear(),months,item).toDateString())}}>
                            <div className="day">
                                <p>{item}</p>
                            </div>
                            <ul className="day-content">
                                <li></li>
                            </ul>
                        </div>
                    </div>
               )
            }
       })
       return result;
    };
    
    const showNextDay = ()=>{
        const arrDay = [];
        for(let i=1; i<=nextDays ; i++){
            arrDay.push(i);
        }
        const result = arrDay.map((item,index)=>{
            return(
                <div className="days" key={index}>
                    <div className="last-day">
                        <p>{item}</p>
                    </div>
                    <ul className="day-content">
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            )
       })
       return result;
    };
   
    const handleModel = () =>{
        setModel(!model);
        
    }
    

    const handleChangeMonthLastMonth = () =>{
        dispatch(lastMonth())
    }
    const handleChangeMonthNextMoth = () =>{
        dispatch(nextMonth())
    }
  return (
    <div>
        <div className="hearder">
            <div className="header-date">
                <span className="year-change" >
                    <button
                        onClick={handleChangeMonthLastMonth}
                    >-</button>
                </span>     

                <div className="view-days">
                    <h1>{arrMonths[months]}</h1>
                    <p>{year}</p>
                </div>

                <span className="year-change">
                    <button
                        onClick={handleChangeMonthNextMoth}
                    >+</button>
                </span>
            </div>
            <div className="btn">
                
            </div>
        </div>
        
        <div className="rank">
            <div className="">Sun</div>
            <div className="">Mon</div>
            <div className="">Tue</div>
            <div className="">Wed</div>
            <div className="">Thu</div>
            <div className="">Fri</div>
            <div className="">Sat</div>
        </div>
        <div className="content">
            {showDayBefore()}
            {showDay()}
            {showNextDay()}
        </div>
        {/* <div className={model ? "model" : "model active"}>
            <div className="item-backgrou" onClick={handleModel}></div>
            <div className="item">
                <input type="text" />
                <button>Add</button>
                <ul>
                    <li>long</li>
                    <li>hoang</li>
                </ul>
            </div>
        </div>  */}
        
        <Todo handleModel={handleModel} model={model} show={show} />
    </div>
  )
}

export default RenderCalendar