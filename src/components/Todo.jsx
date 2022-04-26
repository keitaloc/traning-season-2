import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Todo = ({handleModel,model,show}) => {

    // let {handleModel} = this.props;
    const [todos,setTodo] = useState([

    ]);
    console.log("todos",todos);
    const [typing,setTyping] = useState('')

    const AddTodo = (e) =>{
        e.preventDefault()
        let typingTodo = { id:uuidv4(), title:typing, day:{show} }
        setTodo([...todos,typingTodo])
        setTyping('')
    }

    console.log('todos',todos);

    // const handleDelete = (id) =>{
    //     const newTodos = [...todos];
    //     newTodos.splice(id, 1);
    //     setTodo(newTodos);
    // }
  return (
   
        <div className={model ? "model " : "model active"}>
            <div className="item-backgrou" onClick={handleModel}></div>
            <div className="item">
                <p>{show}</p>
                <input type="text" value={typing} onChange={e=>setTyping(e.target.value)} />
                <button onClick={AddTodo}>Add</button>

                <ul className="list-todo">
                    {todos.map( (item,index) =>{
                        return <>
                            <li key={index}>
                                <p>{item.title}</p> 
                                {/* <button className="btnDe" onClick={()=>handleDelete(item.id)}>X</button> */}
                            </li>
                            
                        </>
                    })}
                </ul>
            </div>
        </div>
  )
}

export default Todo