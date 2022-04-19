import React from "react";
import "../styles/user.css";
import UserInfo from "./user-info";
import AddUser from "./add-user";

export default class User extends React.Component {
  state = {
    user: [{ id: '', userName: '', userAge: '' }],
  };

  addNewUser = (newUser) => {
    console.log("11111111");
    console.log("new user: ",newUser);
    this.setState({
      user: [...this.state.user, newUser],
      // user: this.state.user.push(newUser),
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
