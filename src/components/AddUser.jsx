import React from "react";
import "../styles/add-user.css";

export default class AddUser extends React.Component {
  state = {
    name: "",
    age: "",
    email: "",
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

  addEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  isValidatedUserNameInput = (name) => {
    console.log("name");
    if (!this.state.name) {
      alert("Have not insert name!");
      return false;
    }
    if (
      this.state.name.length > 30 ||
      String(name).match(/[^\w]|_/g) ||
      !String(name).match(/[^0-9]/g)
    ) {
      alert("No more 30 words or any numberic or any special characters");
      return false;
    }

    return true;
  };

  //!BUG: can input "-" and "." symbol
  isValidatedUserAgeInput = (age) => {
    console.log("age");
    // const inputName = document.getElementById("inputName");
    // const validateNameForm = document.getElementById("validateNameForm");

    // inputName.addEventListener("click", () => {
    //   console.log("11111111111");
    //   validateNameForm.style.visibility = "visible";
    // });

    if (!this.state.age) {
      alert("Have not insert age!");
      return false;
    }
    if (String(age).match(/[^0-9]/g)) {
      alert("Accepted numberic only");
      return false;
    }
    if (80 < this.state.age || this.state.age <= 0) {
      alert("Input age between 1 and 80");
      return false;
    }

    return true;
  };

  isValidatedUserEmailInput = (email) => {
    console.log("email");
    let regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!String(email).toLowerCase().match(regex)) {
      alert("invalid email");
      return false;
    }

    return true;
  };

  isEmailExisted = () => {};

  handleSubmit = (e) => {
    e.preventDefault();

    let name = this.state.name;
    let age = this.state.age;
    let email = this.state.email;

    const inputName = document.getElementById("inputName");
    const inputAge = document.getElementById("inputAge");
    const inputEmail = document.getElementById("inputEmail");

    // if (this.notValidatedUserNameInput(this.state.name, inputName)) {
    //   console.log("name----");
    //   inputName.value = "";
    //   inputName.focus();
    //   return;
    // }

    const isValidName = this.isValidatedUserNameInput(name);

    if (!isValidName) {
      inputName.value = "";
      inputName.focus();
      return;
    } else {
      inputAge.focus();
    }

    const isValidAge = this.isValidatedUserAgeInput(age);
    if (!isValidAge) {
      inputAge.value = "";
      inputAge.focus();
      return;
    } else {
      inputEmail.focus();
    }

    const isValidEmail = this.isValidatedUserEmailInput(email);
    if (!isValidEmail) {
      inputEmail.value = "";
      inputEmail.focus();
      return;
    } else {
      inputName.focus();
    }

    // if (!name || !age || !email) return;

    // add a new user
    this.props.addNewUser({
      id: Math.floor(Math.random() * 1000),
      userName: name,
      userAge: age,
      userEmail: email,
    });

    // set input form to empty
    this.setState({
      name: "",
      age: "",
      email: "",
    });
  };

  render() {
    // const { addNewUser } = this.props;

    return (
      <>
        <div className="pt-5">
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              className="form-control w-100 position-relative"
              name="name"
              type="text"
              value={this.state.name}
              placeholder="add user name"
              onChange={(e) => this.addName(e)}
              id="inputName"
            />
            <div
              className="position-absolute bg--1 invisible"
              id="validateNameForm"
            >
              <div className="p-3 text-start">
                <div>not allow any special characters</div>
                <div>name cannot longer than 30 characters</div>
              </div>
            </div>
            <input
              className="form-control mt-3"
              name="age"
              type="text"
              value={this.state.age}
              placeholder="add user age"
              onChange={(e) => this.addAge(e)}
              id="inputAge"
            />
            <input
              className="form-control mt-3"
              name="age"
              type="text"
              value={this.state.email}
              placeholder="add user email"
              onChange={(e) => this.addEmail(e)}
              id="inputEmail"
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
