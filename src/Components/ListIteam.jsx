import React, { useContext } from 'react'
import TodoContext from '../context/TodoContext'

function ListIteam({ todo }) {

  const { deleteTodo,editTodo } = useContext(TodoContext);
  return (
    <li className='list-group-item rounded-0'>
      {todo.text}

      <button className='btn btn-danger btn-sm rounded-0 float-end'
      onClick={()=>deleteTodo(todo.id)}
     >Delete</button>

      <button className='btn btn-warning btn-sm rounded-0 float-end'
        onClick={()=>editTodo(todo)}>Edit</button>
    </li>
  )
}

export default ListIteam