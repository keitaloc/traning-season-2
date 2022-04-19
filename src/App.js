import "./App.css";
import User from "./components/user";
import AddUSer from "./components/add-user";

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
