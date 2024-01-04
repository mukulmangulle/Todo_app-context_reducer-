import React from 'react'
import Form from './Components/Form'
import ListGroup from './Components/ListGroup'
import Navbar from './Components/Navbar'
import { TodoProvider } from './context/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <Navbar />
      <div className="container p-5 " >
        <div className="container p-5 ">
          <Form />
          <ListGroup />
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;