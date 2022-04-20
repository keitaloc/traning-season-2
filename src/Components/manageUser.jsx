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
            <div className="container mt-5">
                <h1 className="text-center">Manage User</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => (
                             <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button  onClick={(e) => this.deleteUser(e,index)} className="btn btn-danger mr-3"><i class="fa-solid fa-trash-can"></i></button>
                                    &emsp;
                                    <button onClick={(e) => this.editUser(e,index)} className="btn btn-info "><i class="fa-solid fa-pen-to-square"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}