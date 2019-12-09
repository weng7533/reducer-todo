import { initialState, reducer } from '../reducers/ToDoReducer';
import React, { useReducer } from 'react';


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>{state.item}</div>

    )
}