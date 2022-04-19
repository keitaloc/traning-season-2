import React from "react"

export default class ManageUser extends React.Component {
    deleteUser = (e, index) => {
        this.props.onDelete(index)
    }
    editUser = (e, index) => {
        this.props.onSubmitEdit(index)
    }
      render() {
        let data = this.props.data;
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Delete</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => (
                             <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td><button  onClick={(e) => this.deleteUser(e,index)} className="btn btn-danger">Delete</button></td>
                                <td><button onClick={(e) => this.editUser(e,index)} className="btn btn-danger">Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}