import { Component } from "react";
import AddUser from "./Components/AddUser";
import EditUser from "./Components/Edit";
import ManageUser from "./Components/ManageUser";
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showAdd: false,
      showEdit: false,
      indexEdit : ''
    }
  }
  onAdd = (Info) => {
    let newContent = [...this.state.data, Info];
    this.setState({ data: newContent })
    this.setState({showAdd:false})
  }
  changeValue = (value) => {
    let newContent = [...this.state.data];
    newContent[this.state.indexEdit] = value
    this.setState({ data: newContent })
    this.setState({showEdit: false})
  }
  removeUser = (index) => {
    const newContent = [...this.state.data]
    newContent.splice(index, 1);
    this.setState({ data: newContent })
  }
  onEdit = (index) => {
    this.setState({showEdit:true, showAdd:false,  indexEdit:index})
  }
  backManager = () => {
    this.setState({showEdit:false})
  }
  userBack = () => {
    this.setState({showAdd:false})
  }
  showAdd = () => {
    this.setState({showAdd:true})
  }
  render() {
    return (
      <div>
        <ManageUser
          onSubmitEdit={this.onEdit} 
          onDelete={this.removeUser} 
          data={this.state.data} 
          />
        <div className="container">
          <button onClick={this.showAdd} className="btn btn-secondary Add">Add</button>
        </div>
        {this.state.showAdd && <AddUser backUser={this.userBack} onSubmit={this.onAdd} />}
        {this.state.showEdit && <EditUser backUser= {this.backManager} changeVlue = {this.changeValue} dataEdit = {this.state} />}
      </div>
    )
  }
}
export default App;