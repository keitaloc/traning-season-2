import React from "react";

export default class AddUser extends React.Component {
  state = {
    name: "",
    age: "",
  };

  addName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // logic

    this.props.addNewUser({
      id: Math.floor(Math.random() * 1000),
      userName: this.state.name,
      userAge: this.state.age,
    });

    //after add a new user
    // this.state({
    //   name: "",
    //   age: "",
    // });
  };

  render() {
    // const { addNewUser } = this.props;

    return (
      <>
        <div className="pt-5">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              className="form-control w-100"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="add user name"
              onChange={(e) => this.addName(e)}
            />
            <input
              className="form-control mt-3"
              name="age"
              type="text"
              value={this.state.age}
              placeholder="add user age"
              onChange={(e) => this.addAge(e)}
            />

            <button
              className="add-btn mt-3 w-100 btn btn-secondary border-0"
              type="submit"
            >
              ADD
            </button>
          </form>
        </div>
      </>
    );
  }
}
