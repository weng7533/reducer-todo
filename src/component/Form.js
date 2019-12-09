import { initialState, reducer } from '../reducers';
import React, { useReducer } from 'react';


export default () => {
    const [state, dispatch] = useReducer(reducer, initialState)
}