import "./App.css";
import React,{ Component } from "react";
import AddInfo from "./components/AddInfo";
import "./styles.css";
import ListInfo from "./components/ListInfo";
import EditInfo from "./components/EditInfo";
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      information: [],
      isShowAdd : false,
      infoUpdate: '',
      isShowUpdate: false
    }
  }

  onAdd = () => {
    this.setState({isShowAdd: true});
    this.setState({isShowUpdate: false})
  }

   randomId = () => {
    const min = 1;
    const max = 100;
    return min + Math.random() * (max - min);
  }

  onSubmit = (data) => {
    console.log(data);
    let newData = {
      id: this.randomId(),
      ...data,
    };
    let newInfo = [...this.state.information];
    newInfo.push(newData);
    this.setState({information: newInfo})
    this.onCloseForm()
  }

  onCloseForm = () => {
    this.setState({isShowAdd: false})
  }

  onDelete = (data) => {
    let index = this.state.information.findIndex((x) => x.id === data);
    let newData = [...this.state.information];
      if (index !== -1) {
        newData.splice(index, 1);
        this.setState({information: newData})
      }
  }

  onUpdate = (id) => {
    let index = this.state.information.findIndex((x) => x.id === id);
    console.log(index)
    let newInfo = [...this.state.information];
    let infoUpdate = newInfo[index];
    this.setState({infoUpdate: infoUpdate})
    this.setState({isShowUpdate: true});
    this.setState({isShowAdd: false})
  }

  onCloseFormUpdate = () => {
    this.setState({isShowUpdate: false})
  }

  onSubmitUpdate = (id, name, age) => {
    if (id) {
      let index = this.state.information.findIndex((x) => x.id === id);
      this.state.information[index] = { id, name, age };
      this.setState({infoUpdate: ''})
    }
    this.setState({information:this.state.information})
    this.onCloseFormUpdate();
  }

  render() {
    return (
        <div className="container">
          <h1 className="text-center mt-4 h1">Manage Users</h1>
          <div>
            <button className="btn btn-success" onClick={this.onAdd}>Add</button>
          </div>
          {this.state.isShowAdd === true ? <AddInfo onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : ''}
          {this.state.isShowUpdate === true ?<EditInfo onCloseFormUpdate={this.onCloseFormUpdate} infoUpdate={this.state.infoUpdate} onSubmitUpdate={this.onSubmitUpdate}/> : '' }
          <ListInfo info={this.state.information} onDelete={this.onDelete} onUpdate={this.onUpdate} />
        </div>
    );
  }
}

export default App;

