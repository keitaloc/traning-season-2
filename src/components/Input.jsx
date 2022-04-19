import React from 'react';
import AddInput from './AddInput'

class Input extends React.Component {
    
    state={
        data:[
            {
                name:'Truong',
                age: '22'
            },
            {
                name:'Hoang',
                age: '333'
            },
            {
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

    }
    render(){
        let {data} = this.state;
        console.log(data);
        return(
           <>
            <div className="render">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Sửa Xóa</th>
                    </tr>
                </thead>
            </table>                  
                {data && data.length > 0 &&
                    data.map((item,index)=>{
                        return( 
                            <tbody>
                                <tr>
                                    <th class="pr-5" scope="row">{index+1}</th>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <button
                                        onClick={()=>this.handleDeleteTodo(item)}
                                    >Xóa</button>
                                </tr> 
                            </tbody>
                             
                        )
                    })
                }
                
            </div>
           <AddInput addNewTodo={this.addNewTodo} />
           </>
        )
    }
}

export default Input;