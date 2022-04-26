
import {  useSelector } from "react-redux";
import AddWorkModal from "./AddWorkModal";
import { useState } from "react";
import DeleteWorkModal from "./DeleteWorkModal";
import EditWorkModal from "./EditWorkModal";

function Calendar(){
    const [isShowAdd, setIsShowAdd] = useState(false);
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [isShowEdit, setIsShowEdit] = useState(false);
    const [chooseDate, setChooseDate] = useState('');
    const [findIndex, setFindIndex] = useState('');
    const [infoEdit, setInfoEdit] = useState('')
    const day = useSelector((state) => state.month);
    const currentDay = new Date(day.year,day.month + 1, 0).getDate();
    const prevDay = new Date(day.year,day.month, 0).getDate(); 
    const firstDayIndex = new Date(day.year,day.month, 0).getDay();
    const lastDayIndex = new Date(day.year,day.month + 1, 0).getDay();
    const nextDays = 7 - (lastDayIndex + 1);  

    const showAddModal = (item) => {
        setIsShowAdd(!isShowAdd);
        setChooseDate(item + '' + (day.month + 1) + '' + day.year)
    }

    const closeAddModal = () => {
        setIsShowAdd(!isShowAdd)
    }

    const listData = JSON.parse(localStorage.getItem("data"));

    const showListToDo = (date) => {
        let result = null;
        if (!listData) return "";
        for (let key in listData) {
          if (key === date) {
            result = listData[key].map((item, index) => {
              return (
                     <li key={index} className="mt-2 border-item" >{item} &emsp;
                        <i className="far fa-edit color-icon-selective-yellow cursor-pointer " onClick={(e) => editToDo(index,key)}></i> &nbsp; 
                        <i className="fas fa-trash color-icon-red cursor-pointer" onClick={(e) => deleteToDo(index,key)}></i>
                    </li>);
            });
          }
        }
        return result;
    }

    const deleteToDo = (item,date) => {
        setIsShowDelete(!isShowDelete);
        setChooseDate(date);
        setFindIndex(item);
    }
    const closeDelete = () => {
        setIsShowDelete(!isShowDelete);
    }

    const editToDo = (item, date) => {
        setIsShowEdit(!isShowEdit);
        setFindIndex(item);
        setChooseDate(date);
        setInfoEdit(listData[date][item])
        console.log(listData[date][item])
    }

    const closeEdit = () => {
        setIsShowEdit(!isShowEdit)
    }
    const showDays = () => {
        const arrDays = [];
        let colorDarkgray = '';
        let active = "";
        for(let i = firstDayIndex + 1; i > 0; i--){
            // arrDays.push(prevDay - i + 1);
            // colorDarkgray="color-darkgray"
            arrDays.push("")
        }
        for(  let i = 1; i <= currentDay; i++){
            arrDays.push(i);
        }
        for(let i = 1; i<=nextDays; i++){
            // arrDays.push(i);
            arrDays.push("")
        }
        const result = arrDays.map((item,index)=>{
            console.log();
            if(item === new Date().getDate() &&  day.month === new Date().getMonth() &&  day.year === new Date().getFullYear()){
                active = "active-date day-hover";
            }else {
                active='day-hover';
            }
            // if(index < firstDayIndex + 1 || index <= nextDays){
            //     colorDarkgray="color-darkgray"
            // }else {
            //     colorDarkgray=''
            // }
            return(
                <div className={`border-day h-100 w-100 cursor-pointer ${active} ${colorDarkgray}`} key={index}>
                    <span className="date cursor-pointer" onClick={(e) => showAddModal(item)} >{item}</span>
                    <ul > {showListToDo(item +"" +(day.month + 1) +"" + day.year)} </ul>
                </div>
            )
        })
        return result;
    } 

    return(
        <div className="calendar-body mt-4">
            <div className="calendar-week-day  text-center">
                <div className="border border-1 py-2">Sun</div>
                <div className="border border-1 py-2">Mon</div>
                <div className="border border-1 py-2">Tue</div>
                <div className="border border-1 py-2">Wed</div>
                <div className="border border-1 py-2">Thu</div>
                <div className="border border-1 py-2">Fri</div>
                <div className="border border-1 py-2">Sat</div>
            </div>
            <div className="calendar-days text-center ">
                {showDays()}
            </div>
            <AddWorkModal isShowAdd={isShowAdd} closeModal={closeAddModal} chooseDate={chooseDate}/>
            <DeleteWorkModal isShowDelete={isShowDelete} closeDelete={closeDelete} findIndex={findIndex} chooseDate={chooseDate}/>
            <EditWorkModal isShowEdit={isShowEdit} closeEdit={closeEdit} findIndex={findIndex} chooseDate={chooseDate} infoEdit={infoEdit} />
        </div>
    )
}
export default Calendar;



