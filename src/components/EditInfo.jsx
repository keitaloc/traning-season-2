import { Component } from "react";

class EditInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.infoUpdate.name,
            age: this.props.infoUpdate.age,
            id: this.props.infoUpdate.id,
            email: this.props.infoUpdate.email,
            errName: false,
            errAge: false,
            errEmail: false,
            errValidateEmail: false,
            errEdit: false,
            errValidateName: false,
            errValidateAge: false
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onBlurName = () => {
        let {name} = this.state
         if (!name) {
           this.setState({...this.state, errName: true , errValidateName: false});
         }else if(name.length > 30){
             this.setState({...this.state,errValidateName: true, errName: false})
         }else {
             this.setState({...this.state,errValidateName: false, errName: false})
         }
     }
     
     onBlurAge = () => {
         let {age} = this.state;
         if (!age) {
           this.setState({... this.state, errAge: true, errValidateAge: false });
         }else if(isNaN(age) === true || age < 0 || age > 80){
             this.setState({...this.state, errValidateAge: true, errAge: false})
         }else {
             this.setState({...this.state, errValidateAge: false, errAge: false})
         }
     }
 
     onBlurEmail = () => {
         let {email} = this.state
         if (!email) {
           this.setState({...this.state, errEmail: true, errValidateEmail: false});
         }else if (!this.validateEmail()) {
             this.setState({...this.state, errValidateEmail: true, errEmail: false });
         }else {
             this.setState({...this.state, errValidateEmail: false, errEmail: false });
         }
     }
 
     validateEmail = () => {
         const email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
         return email.test(this.state.email);
     };
 
    onCloseFormUpdate = () => {
        this.props.onCloseFormUpdate()
    }

    onSubmitUpdate = (e) => {
        e.preventDefault();
        let {id, name, age, email} = this.state;
        if( name && name.length <= 30 && isNaN(age) === false && age > 0 && age < 80 && email && this.validateEmail()){
            this.props.onSubmitUpdate(id, name, age,email)
        }else{
            this.setState({errEdit: true})
        }
        
    }
    render(){
        return(
            <div className="panel panel-warning p-4 mt-3">
            <div className="panel-heading">
                <h3 className="panel-title text-center h3">
                    Edit Information
                    <span
                        className="fa fa-times-circle text-right"
                        onClick={this.onCloseFormUpdate}></span>
                </h3>
            </div>
            <div className="panel-body">
                <form >
                    <div className="form-group">
                        <label>Name :</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control mt-1"
                            onChange={this.onChange}
                            value={this.state.name}
                            onBlur={this.onBlurName}
                        />
                    </div>
                    {this.state.errName === true && (<p className="text-danger mt-1 mb-1">(*) Please enter name!</p>) }
                    {this.state.errValidateName === true && (<p className="text-danger mt-1 mb-1">(*) The length of the name cannot exceed 30 characters!</p>) }
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="text"
                            name="age"
                            className="form-control mt-1"
                            onChange={this.onChange}
                            value={this.state.age}
                            onBlur={this.onBlurAge}
                        />
                    </div>
                    {this.state.errAge === true && (<p className="text-danger mt-1">(*) Please enter age!</p>) }
                    {this.state.errValidateAge === true && (<p className="text-danger mt-1">(*) Please enter numeric age and range from 0 to 80!</p>) }
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            className="form-control mt-1"
                            onChange={this.onChange}
                            value={this.state.email}
                            onBlur={this.onBlurEmail}
                        />
                    </div>
                    {this.state.errEmail === true && (<p className="text-danger mt-1 mb-1">(*) Please enter email!</p>) }
                    {this.state.errValidateEmail === true && (<p className="text-danger mt-1 mb-1">(*) Wrong email format!</p>) }
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success" onClick={this.onSubmitUpdate}>Edit</button>&nbsp;
                    </div>
                    {this.state.errEdit === true && (<p className="text-danger mt-1 mb-1">(*) Please enter full information and correct format!</p>) }
                </form>
            </div>
        </div>
        )
    }
}
export default EditInfo;