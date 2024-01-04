const TodoReducer = (state, action) => {

    if (action.type === "DELETE") {
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
    }
    else if (action.type === "SAVE") {
        return {
            ...state,
            todos: [action.payload, ...state.todos],
        }
    }
    else if (action.type === "EDIT") {
        return {
            ...state,
            edit: { todo: action.payload, editMode: true },
        }
    }
    else if (action.type === "UPDATE") {
        return {
            ...state,
            todos: state.todos.map(item =>item.id === action.payload.id ? { ...item, text: action.payload.text } : item),
            edit: { todo: {}, editMode: false },
        }
    }

}
export default TodoReducer;