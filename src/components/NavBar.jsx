import React from 'react'

const NavBar = () => {
    const handleChangeMonthIn = () =>{
       
    }
    const handleChangeMonthDe = () =>{
      
    }
  return (
    <div>
        <div className="hearder">
            <div className="header-date">
                <span className="year-change" >
                    <button
                        onClick={handleChangeMonthDe}
                    >-</button>
                </span>     

                <div className="view-days">
                    <h1>Tháng 4</h1>
                    <p></p>
                </div>

                <span className="year-change">
                    <button
                        onClick={handleChangeMonthIn}
                    >+</button>
                </span>
            </div>
            <div className="btn">
                <button>Month</button>
                <button>Year</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar