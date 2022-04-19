import React from "react"

export default class AddUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name : '',
          age: '',
        }
       
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeAge = (e) => {
        this.setState({age: e.target.value})
    }
    submit = (e) => {
        e.preventDefault()
        if(this.state.name.length !== 0 && this.state.age.length !== 0) {
            this.props.onSubmit(this.state)
            this.setState({name: '', age: ''});
        }
    }
    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center">Add user</h1>
                <input value={this.state.name} className="form-control" type="text" placeholder="Enter name" onChange={this.onChangeName}/>
                <input value={this.state.age} className="form-control" type="text" placeholder="Enter age" onChange={this.onChangeAge}/>
                <button onClick={this.submit} className="btn btn-primary text-center mt-2 w-100">Add</button>
            </div>
        )
    }
}