
import React, { useContext } from 'react';
import { ListContext } from '../Context/listContext';


export default () => {


    const todos = useContext(ListContext);


    return (

        <div>
            {
                todos.map((todo, key) => {
                    return (<div key={key}>{todo.item}</div>)
                })

            }
        </div>

    )
}