import React, { useContext } from 'react'
import ListIteam from './ListIteam'
import TodoContext from '../context/TodoContext'


const ListGroup = () => {

   const{todos}=useContext(TodoContext);

  return (
    <ul className='list-group my-2'>
        {
          todos.map(todo=> <ListIteam key={todo.id} todo={todo} />)
        }
   
    </ul>
  )
}

export default ListGroup