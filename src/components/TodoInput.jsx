import { useState } from "react"
import './TodoInput.css'
import  MaterialIcon  from 'material-icons-react'

export default function TodoInput({ onAddItem }){
    var [currentInput, setcurrentInput] = useState('');

    function onInputChange(event){
        setcurrentInput(event.target.value);
    }

    function addTodoItem(){
        onAddItem(currentInput);
        setcurrentInput('');
    }
    
    return(
        <div className='todo-input-div'>
        <input className='todo-input' type="text" value={currentInput} onChange={onInputChange} />
        <button className='todo-input-add' onClick={addTodoItem}>
        <MaterialIcon icon='add' color='white' />
            Add
        </button>
        </div>
    )
}