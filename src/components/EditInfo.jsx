import { Component } from "react";

class EditInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.infoUpdate.name,
            age: this.props.infoUpdate.age,
            id: this.props.infoUpdate.id
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
    onCloseFormUpdate = () => {
        this.props.onCloseFormUpdate()
    }
    onSubmitUpdate = () => {
        let {id, name, age} = this.state;
        this.props.onSubmitUpdate(id, name, age)
    }
    render(){
        return(
            <div className="panel panel-warning p-4 mt-3">
            <div className="panel-heading">
                <h3 className="panel-title text-center h3">
                    Edit information
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
                        />
                    </div>
                    <div className="form-group">
                        <label>Age:</label>
                        <input
                            type="text"
                            name="age"
                            className="form-control mt-1"
                            onChange={this.onChange}
                            value={this.state.age}
                        />
                    </div>
                   
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-success" onClick={this.onSubmitUpdate}>Edit</button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
        )
    }
}
export default EditInfo;