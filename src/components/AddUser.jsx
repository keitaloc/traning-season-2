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

  // block special key
  blockSpecialKey = (e) => {
    let regex = new RegExp("^[a-zA-z0-9]+$");
    let key = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (!regex.test(key)) {
      e.preventDefault();
      return false;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const inputName = document.getElementById("inputName");

    const inputAge = document.getElementById("inputAge");

    // condition
    if (!inputName.value) {
      alert("Have not insert name!");
      return;
    } else if (inputName.value.length > 25) {
      alert("No more 25 words");
      this.blockSpecialKey(e);
      return;
    }

    if (!inputAge.value) {
      alert("Have not insert age!");
      return;
    } else if (inputAge.value <= 0) {
      alert("Age cannot less or equal to 0!");
      return;
    }

    this.props.addNewUser({
      id: Math.floor(Math.random() * 1000),
      userName: this.state.name,
      userAge: this.state.age,
    });

    //after added a new user
    inputName.focus();

    this.setState({
      name: "",
      age: "",
    });
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
              id="inputName"
            />
            <input
              className="form-control mt-3"
              name="age"
              type="number"
              value={this.state.age}
              placeholder="add user age"
              onChange={(e) => this.addAge(e)}
              id="inputAge"
            />

            <button
              className="add-btn mt-3 w-100 btn btn-secondary border-0"
              type="submit"
              id="addBtn"
            >
              ADD
            </button>
          </form>
        </div>
      </>
    );
  }
}
