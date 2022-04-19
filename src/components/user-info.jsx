import React from "react";

export default class UserInfo extends React.Component {
  state = {
    user: this.props.user,
  };

  deleteUser = (id) => {
    console.log("delete function");
    this.props.user.map((item) => {
      console.log(this.props.user);
      return this.props.user.splice(item.id === id, 1);
    });

    // after deleted
    this.setState({
      user: [{ ...this.state.user }],
    });
  };

  // updateUser = () => {
  //   this.setState({
  //     user: [...this.props.user],
  //   });
  // };

  render() {
    const { user } = this.props;

    console.log("user user user user");
    console.log(this.props.user);

    return (
      <>
        {user.map((item, index) => {
          console.log(item, index);
          return (
            <tr className="lh--3 highlight" key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.userName}</td>
              <td>{item.userAge}</td>
              <td className="btn btn-secondary text-dark ps-2 pe-2 w--4 ms-1 me-1">
                Edit
              </td>
              <td
                onClick={() => this.deleteUser(item.id, index)}
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
