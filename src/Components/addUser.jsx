import React from "react"
import "../Styles/Add.css"
export default class AddUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
          name : '',
          age: '',
          email: '',
          errorAge: false,
          errorName: false,
          errorEmail: false
        }
       
    }
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    onChangeAge = (e) => {
        this.setState({age: e.target.value})
    }
    onChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    validateName = () => {
        if(this.state.name.length === 0 || this.state.name.length >= 30) {
            this.setState({errorName: true})
        }
        else {
            this.setState({errorName: false})
        }
    }
    validateAge = () => {
        const checkAge = this.state.age;
        if (isNaN() || checkAge < 1 || checkAge > 80) {    
            this.setState({errorAge: true})
        }
        else {
            this.setState({errorAge: false})
        }
    }
    validateEmail = () => {
        const checkEmail = this.state.email;
        if (!this.check(checkEmail)){
            this.setState({errorEmail: true})
        }
        else {
            this.setState({errorEmail: false})
        }
    }

    check = (email) => {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(email).toLowerCase());
    }
    submit = (e) => {
        e.preventDefault()
        const checkAge = this.state.age;
        const checkName = this.state.name;
        const checkEmail = this.state.email;
        if(checkName.length === 0 || checkName.length >= 30) {
           return false
        }
        if (isNaN(checkAge) || checkAge < 1 || checkAge > 80) {    
            return false
        }
        if (!this.check(checkEmail)){
            return false
        }
      
        this.props.onSubmit(this.state)
        this.setState({name: '', age: '', email: '', errorAge: false, errorEmail: false, errorName: false});
    }
    backManager = () => {
        this.props.backUser()
    } 
    render() {
        return (
            <div className="container mt-5">
                <div className="main">
                    <div className="icon"><i onClick={this.backManager} className="fa-solid fa-xmark"></i></div>
                    <h1 className="text-center">Add user</h1>
                    <form onSubmit={this.submit}>
                        <div className="name">
                            <input value={this.state.name} className="form-control" type="text" placeholder="Enter name" 
                            onChange={this.onChangeName}
                            onBlur ={this.validateName}
                            />
                            {this.state.errorName ? <p>Please enter name</p>  : ''}
                        </div>
                        <div className="age mt-2">
                            <input value={this.state.age} className="form-control" type="text" placeholder="Enter age" 
                            onChange={this.onChangeAge}
                            onBlur ={this.validateAge}
                            />
                            {this.state.errorAge ? <p>Please enter age as number (1-80)</p> : ''}
                        </div>
                        <div className="email mt-2">
                            <input value={this.state.email} className="form-control" type="text" placeholder="Enter email" 
                            onChange={this.onChangeEmail}
                            onBlur={this.validateEmail}
                            />
                            {this.state.errorEmail ? <p>Please enter your email in the format: abc@gmail.com</p> : ''}
                        </div>
                        <button type="submit" className="btn btn-primary text-center mt-2 w-100">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}