import React from "react";
import "../styles/user.css";
import UserInfo from "./UserInfo";
import AddUser from "./AddUser";
export default class User extends React.Component {
  state = {
    user: [],
  };

  addNewUser = (newUser) => {
    this.setState({
      user: [...this.state.user, newUser],
    });
  };

  render() {
    return (
      <>
        <div className="grid-5">
          <h5>#</h5>
          <h5>User Name</h5>
          <h5>User Age</h5>
          <h5>User Email</h5>
          <h5>#</h5>
        </div>
        <div className="content">
          <UserInfo user={this.state.user} />
        </div>

        <AddUser addNewUser={this.addNewUser} />
      </>
    );
  }
}
