import { Component } from "react";

class AddInfo extends Component{
    constructor(props) {
        super(props);
        this.state = {
           name: '',
           age:''
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

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    };

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    render() {
        return (
            <div className="panel panel-warning p-4 mt-3">
                <div className="panel-heading">
                    <h3 className="panel-title text-center h3">
                        Add information
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}></span>
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
                            />
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input
                                type="text"
                                name="age"
                                className="form-control mt-1"
                                onChange={this.onChange}
                            />
                        </div>
                       
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-success" onClick={this.onSubmit}>Add</button>&nbsp;
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default AddInfo