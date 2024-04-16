import './TodoItem.css'
import MaterialIcon from 'material-icons-react'

export default function TodoItem({ title, isCompleted, onDelete, onComplete }){
    function onDeleteClick(_event){
        onDelete(title);
    }

    function onCompleteClick(_event){
        onComplete(title);
    }
    return(
        <div className='todo-item'>
        <div className='todo-title'>{title}</div>
        <div className='icons-group'>
        {!isCompleted && <div className='todo-delete' onClick={onCompleteClick}>
            <MaterialIcon icon='task_alt' color='white'/>
        </div>}
        <div className='todo-delete' onClick={onDeleteClick}>
            <MaterialIcon icon='delete' color='white'/>
        </div>
        </div>
        
        </div> 
    )
}
 