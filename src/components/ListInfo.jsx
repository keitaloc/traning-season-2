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
            <table className="table table-striped mt-5">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                  {this.props.info.length > 0 && this.props.info.map((item, index) => (
                       <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.email}</td>
                            <td>
                                <i class="far fa-edit color-selective-yellow" onClick={(e) => this.onUpdate(e,item.id)}></i> &emsp;
                                <i class="far fa-trash-alt color-red" onClick={(e) => {this.onDeleteInfo(e,item.id)}}></i>
                            </td>
                     </tr>
                  )) }   
              </tbody>
            </table>
        )
    }
}
export default ListInfo;