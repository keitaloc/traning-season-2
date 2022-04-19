import { Component } from "react";

class ListInfo extends Component {
    onDeleteInfo = (e, id) => {
        this.props.onDelete(id)
    }
    
    onUpdate = (e,id) => {
        this.props.onUpdate(id);
        console.log(id)
    }
    render(){
        console.log(this.props.info)
        return(
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.info.length > 0 && this.props.info.map((item, index) => (
                       <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>
                                <button className="btn btn-warning" onClick={(e) => this.onUpdate(e,item.id)}>Edit</button> &emsp;
                                <button className="btn btn-danger" onClick={(e) => {this.onDeleteInfo(e,item.id)}}>Delete</button>
                            </td>
                     </tr>
                  )) }   
              </tbody>
            </table>
        )
    }
}
export default ListInfo;