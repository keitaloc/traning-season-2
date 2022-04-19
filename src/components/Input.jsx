import React from 'react';
import AddInput from './AddInput'

class Input extends React.Component {
    
    state={
        data:[
            {
                id:"1",
                name:'Truong',
                age: '22'
            },
            {
                id:"2",
                name:'Hoang',
                age: '333'
            },
            {
                id:"3",
                name:'Long',
                age:'44'
            }
        ]
    }

    addNewTodo = (todo) =>{
        this.setState({
            data: [...this.state.data,todo]
        })
    }
    handleDeleteTodo = (todo) =>{
        let currentTodo = this.state.data
        currentTodo = currentTodo.filter(item=>item.id !== todo.id)
        this.setState({
            data:currentTodo
        })
    }
    render(){
        let {data} = this.state;
        console.log(data);
        return(
           <>
            <div className="render">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Sửa Xóa</th>
                    </tr>
                </thead>
            </table>   
            <tbody>               
                {data && data.length > 0 &&
                    data.map((item,index)=>{
                        return( 
                            
                                <tr>
                                    <th className="stt" scope="row">{index+1}</th>
                                    <td className="name">{item.name}</td>
                                    <td className="age">{item.age}</td>
                                    <button className="xoa"
                                        onClick={()=>this.handleDeleteTodo(item)}
                                    >Xóa</button>
                                    <button

                                    >Sửa</button>
                                </tr> 
                            
                             
                        )
                    })
                }
            </tbody>
            </div>
           <AddInput addNewTodo={this.addNewTodo} />
           </>
        )
    }
}  

export default Input;