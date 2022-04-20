import React from "react";
import "../styles/user.css";
import UserInfo from "./user-info";
import AddUser from "./add-user";

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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Name</th>
              <th scope="col">User Age</th>
            </tr>
          </thead>
          <tbody className="">
            <UserInfo user={this.state.user} />
          </tbody>
        </table>
        <AddUser addNewUser={this.addNewUser} />
      </>
    );
  }
}
