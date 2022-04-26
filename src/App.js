import './App.css';
import RenderCalendar from './components/RenderCalendar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div className="calendar">
        {/* <NavBar /> */}
        <RenderCalendar />
        <Todo />
      </div>
    </div>
  );
}

export default App;
