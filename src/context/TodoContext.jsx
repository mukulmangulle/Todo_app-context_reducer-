import { createContext, useContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const initialState = {
        todos: [{ id: 1, text: "Something from reducer" }],
        edit: {
            todo: {},
            editMode: false,
        },
    };

    const [state, dispatch] = useReducer(TodoReducer, initialState);


    //delete
    const deleteTodo = (id) => {
        dispatch({
            type: "DELETE",
            payload: id,
        });
    };

    // save
    const saveTodo = (text) => {
        const newTodo = {
            id: crypto.randomUUID(),
            text,
        };
        dispatch({
            type: "SAVE",
            payload: newTodo,
        })
    };

    //edit
    const editTodo = (todo) => {
        dispatch({
            type: "EDIT",
            payload: todo,
        })
    };

    //  update
    const updateTodo = (oldId, newText) => {
        const updatedTodo = {
            id: oldId,
            text: newText,
        }
        dispatch({
            type: "UPDATE",
            payload: updatedTodo,
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                edit: state.edit,
                deleteTodo,
                saveTodo,
                editTodo,
                updateTodo
            }}>
            {children}
        </TodoContext.Provider>
    );
};



export default TodoContext;