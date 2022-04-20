import "./App.css";
import User from "./components/User";
import AddUSer from "./components/AddUser";

function App() {
  return (
    <div className="App">
      {/* <USer userName={userName} userAge={userAge} /> */}
      <div className="container">
        <User />
        {/* <AddUSer /> */}
      </div>
    </div>
  );
}

export default App;
