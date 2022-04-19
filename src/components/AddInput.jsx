import React from 'react';

class AddInput extends React.Component {
    state={
        name:'',
        age:''
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
    handleAddTodo = () => {
        let todo = {
            name:this.state.name,
            age:this.state.age,
        }
        this.props.addNewTodo(todo);
    }
    render() {
        let {name,age} = this.state;
        return(
            <>
                <div className="input">
                    <label htmlFor="">Name:</label>

                    <input type="text"
                        value={name}
                        onChange={(e)=>this.hanldeOnchangeName(e)}
                        />

                    <label htmlFor="">Age:</label>

                    <input type="text" 
                        value={age}
                        onChange={(e)=>this.hanldeOnchangeAge(e)}
                    />


                    <button
                        onClick= {()=>this.handleAddTodo()}
                    >Add</button>
                </div>
            </>
        )
    }
}

export default AddInput;