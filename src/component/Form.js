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

    }

    const handleTodoClick = (e) => {
        e.preventDefault();
        dispatch({
            type: 'TOGGLE', payLoad: {
                item: e.target.textContent
            }
        })

    }

    const handleClearClick = (e) => {
        dispatch({
            type: 'CLEARCOMPLETED', payLoad: {
                item: e.target.textContent
            }
        })
    }


    const passingVariable = [state.Todolist, handleTodoClick]

    return (
        <ListContext.Provider value={passingVariable}>
            <>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} value={input} />
                    <button onClick={handleAddToDoClick}>Add To Do</button>
                    <button onClick={handleClearClick}>Clear completed</button>
                </form>

                <TodoDisplayer />
            </>
        </ListContext.Provider>
    )
}