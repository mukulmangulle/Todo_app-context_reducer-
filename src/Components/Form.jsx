import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/TodoContext';


const Form = () => {

  const { edit, saveTodo, updateTodo } = useContext(TodoContext)

  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
     if(!edit.editMode){
      saveTodo(text);
     }else{
      updateTodo(edit.todo.id ,text);
     }
 
    setText("");

  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit])


  return (
    <form onSubmit={handleSubmit} >
      <input type="text"
        placeholder='Enter text'
        className='form-control rounded-0 my-3'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className='btn btn-success rounded-0 w-100 my-2'
       onSubmit={() => handleSubmit()}>save</button>
    </form>
  )
}

export default Form