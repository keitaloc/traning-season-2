import React from "react";

export default class UserInfo extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     user: props,
  //   };
  // }

  state = {
    user: this.props.user
  }

  deleteUser = (id) => {
    const index = this.props.user.findIndex((item) => id === item.id);

    this.props.user.splice(index, 1);

    // after deleted, updated current user's list
    this.setState({
      user: [{ ...this.state.user }],
    });
  };

  editUser = (id) => {
    // const index = this.props.user.findIndex((item) => id === item.id);

    const inputName = document.getElementById("inputName");

    const inputAge = document.getElementById("inputAge");

    this.props.user.map((user) => {
      if (user.id === id) {
        // set user's info to "" to get easy know which user is updating
        user.userName = "";
        user.userAge = "";

        // click to edit btn
        inputName.focus();

        user.userName = inputName.value;
        user.userAge = inputAge.value;

        // change button content
        // editBtn.innerHTML = "Save";

        // update user list
        this.setState({
          user: [...this.state.user],
        });

        // set input form to empty
        inputName.value = "";
        inputAge.value = "";
      }
    });
  };

  render() {
    const { user } = this.props;

    return (
      <>
        {user.map((item, index) => {
          return (
            <tr className="lh--3" key={item.id}>
              <th scope="row">{index + 1}</th>
              <td id="name">{item.userName}</td>
              <td id="age">{item.userAge}</td>
              <td
                onClick={() => this.editUser(item.id)}
                className="btn btn-secondary text-dark ps-2 pe-2 w--4 ms-1 me-1 edit-btn"
                id="editBtn"
              >
                Edit
              </td>
              <td
                onClick={() => this.deleteUser(item.id)}
                className="btn btn-danger text-dark w--4"
              >
                Delete
              </td>
            </tr>
          );
        })}
      </>
    );
  }
}
