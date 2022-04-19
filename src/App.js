import { Component } from "react";
import AddUser from "./Components/addUser";
import EditUser from "./Components/edit";
import ManageUser from "./Components/manageUser";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showAdd: true,
      showEdit: false,
      indexEdit : ''
    }
  }
  onAdd = (Info) => {
    let newContent = [...this.state.data];
    newContent.push(Info);
    this.setState({ data: newContent })
  }
  changeVlue = (value) => {
    console.log(value)
    if (this.state.indexEdit) {
      const newContent = [...this.state.data]
      this.setState({ data: newContent })
    }
    // this.setState({data: this.state.data})


  }
  removeUser = (index) => {
    const newContent = [...this.state.data]
    newContent.splice(index, 1);
    this.setState({ data: newContent })
  }
  onEdit = (index) => {
    this.setState({showEdit:true, showAdd:false, indexEdit:index})
  }
  render() {
    return (
      <div>
        <ManageUser 
          onSubmitEdit={this.onEdit} 
          onDelete={this.removeUser} 
          data={this.state.data} 
        />
        {this.state.showAdd ? <AddUser onSubmit={this.onAdd} /> :  ''}
        {this.state.showEdit ? <EditUser changeVlue = {this.changeVlue} dataEdit = {this.state} /> : ''}
      </div>
    )
  }
}
export default App;