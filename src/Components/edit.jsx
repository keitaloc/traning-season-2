import React from "react"

export default class EditUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name : this.props.dataEdit.data[this.props.dataEdit.indexEdit].name,
            age: this.props.dataEdit.data[this.props.dataEdit.indexEdit].age,
        }
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeAge = (e) => {
        this.setState({age: e.target.value})
    }
    edit = (e) => {
        e.preventDefault()
        if(this.state.name.length !== 0 && this.state.age.length !== 0) {
            this.props.changeVlue(this.state)
        }
    }
    render() {
        // let idEdit = this.props.dataEdit.indexEdit;
        return (
            <div className="container mt-5">
                <h1 className="text-center">Edit user</h1>
                <input value={this.state.name}  className="form-control" type="text" placeholder="Enter name" onChange={this.onChangeName}/>
                <input value= {this.state.age} className="form-control" type="text" placeholder="Enter age" onChange={this.onChangeAge}/>
                <button onClick={this.edit} className="btn btn-primary text-center mt-2 w-100">Edit</button>
            </div>
        )
    }
}