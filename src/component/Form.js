import { initialState, reducer } from '../reducers/ToDoReducer';
import React, { useReducer, useState } from 'react';
import { ListContext } from '../Context/listContext'
import TodoDisplayer from './TodoDisplayer';
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleAddToDoClick = (e) => {
        dispatch({
            type: 'ADDTODO', payLoad: {
                item: input,
                completed: false,
                id: new Date()
            }
        })
        console.log(state);
    }
    return (
        <ListContext.Provider value={state.Todolist}>
            <>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input} />
                    <button onClick={handleAddToDoClick}>Add To Do</button>
                </form>

                <TodoDisplayer />
            </>
        </ListContext.Provider>
    )
}