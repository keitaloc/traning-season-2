import React from 'react'


class FormInput extends React.Component {
    state={
        listTodo:[
            {
                name:'',
                age: '',
                gmail:""
            }
        ],
        editTodo:{}
    }
    hanldeOnchangeName =(e) => {
        this.setState({
            name:e.target.value
        })
    }
    hanldeOnchangeAge =(e) => {
        this.setState({
            age:e.target.value
        })
    }
    hanldeOnchangeGmail =(e) => {
        this.setState({
            gmail:e.target.value
        })
    }
    
    handleAddTodo = (e) => {    
        e.preventDefault();

        const checkName = this.state.name
        const checkAge = this.state.age
        const checkMail = this.state.gmail
    
        const check = (email) => {
            const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(String(email).toLowerCase());
        }
        if(!checkName || checkName.length > 30 ){
            alert("Name")
            return;
        }else if(!checkAge || checkAge > 80){
            alert("Age")
            return;
        }else if(!check(checkMail) ){
            alert("Emial")
            return;
        }

        let todo = {
            id: Math.floor(Math.random()*1000),
            name:this.state.name,
            age:this.state.age,
            gmail:this.state.gmail,
        }
        this.props.addNewTodo(todo);
        
    }

   render() {
       let {name,age,gmail} = this.state.listTodo
    return (
        <div>
    
            <form onSubmit={(e)=>this.handleAddTodo(e)}>
                <input type="text" placeholder="name" 
                 value={name} 
                 onChange={(e)=>this.hanldeOnchangeName(e)}
                 />      
                
                <input type="text" placeholder="age"
                value={age}
                onChange={(e)=>this.hanldeOnchangeAge(e)}
                />    

                <input type="email" placeholder="gmail" 
                    value={gmail}
                    onChange={(e)=>this.hanldeOnchangeGmail(e)}
                />  
        
                <button type="submit">Create</button>
             </form>
    
            
        </div>
      )
   }
  
}

export default FormInput