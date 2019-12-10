
import React, { useContext } from 'react';
import { ListContext } from '../Context/listContext';


export default () => {


    const todos = useContext(ListContext);


    return (

        <div>
            {
                todos[0].map((todo, index) => {
                    return (<div className={todo.completed ? 'completed' : ''} key={index} id={3} value={todo.item} onClick={todos[1]}>{todo.item}</div>)
                })

            }
        </div>

    )
}