import React from "react"

export default class EditUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            newName : this.props.dataEdit.data[this.props.dataEdit.indexEdit].name,
            newAge: this.props.dataEdit.data[this.props.dataEdit.indexEdit].age,
        }
    }
    onChangeName = (e) => {
        this.setState({newName: e.target.value})
    }
    onChangeAge = (e) => {
        this.setState({newAge: e.target.value})
    }
    edit = (e) => {
        e.preventDefault()
        if(this.state.newName.length !== 0 && this.state.newAge.length !== 0) {
            this.props.changeVlue(this.state)
        }
    }
    render() {
        // let idEdit = this.props.dataEdit.indexEdit;
        return (
            <div className="container mt-5">
                <h1>Edit user</h1>
                <input value={this.state.newName}  className="form-control" type="text" placeholder="Enter name" onChange={this.onChangeName}/>
                <input value= {this.state.newAge} className="form-control" type="text" placeholder="Enter age" onChange={this.onChangeAge}/>
                <button onClick={this.edit} className="btn btn-primary text-center mt-2">Edit</button>
            </div>
        )
    }
}