import './App.css';
import AddWorkModal from './components/AddWorkModal';
import Calendar from './components/Calendar';
import ChangeMonth from './components/ChangeMonth';
import './styles.css'

function App() {
  return (
    <div className="App bg-image">
      <div className="container">
        <div className="d-flex justify-content-end">
          {/* <div className="btn-group mt-5 w-25 " role="group" >
              <button type="button" className="btn btn-outline-primary display-month">Month</button>
              <button type="button" className="btn btn-outline-primary display-year">Year</button>
          </div> */}
        </div>
        <div className="list-calendar-months ">
            <div className="calendar">   
             <ChangeMonth />   
             <Calendar />
             <AddWorkModal />
            </div>
        </div>
      
      </div>
      

    </div>
  );
}

export default App;
