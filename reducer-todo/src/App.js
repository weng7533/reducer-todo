import React, { useState, useReducer, useEffect } from 'react';
import {
  ADD_TODO,
  TODO_STATE,
  CLEAR_COMPLETED,
  initialState,
  todoReducer
} from '../src/reducer/index';
import './App.css';

function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({
      type: ADD_TODO,
      payload: value
    })

    setValue('')
  }
  const handleTodoClick = event => {
    console.log(document.getElementById(event.target.id));

    document.getElementById(event.target.id).classList.toggle('TodoItemCompleted');

    dispatch(
      {
        type: TODO_STATE,
        payload: event.target.id
      }
    )
  }

  const handleDelete = event => {
    console.log('TodoItemCompleted', document.getElementsByClassName('TodoItemCompleted'))

    // document.getElementsByClassName('TodoItemCompleted').classList.remove('TodoItemCompleted');

    dispatch(
      {
        type: CLEAR_COMPLETED
      }
    )



  }

  useEffect(() => {
    const complted = document.getElementsByClassName('TodoItemCompleted');
    console.log(complted)
    if (complted.length >= 1) { complted.classList.add('TodoItemCompleted') }
    // complted.classList.remove('TodoItemCompleted');
  }, [])

  return (
    <div className='App'>
      <div className='Todos'>
        {console.log(state)}
        {
          state.map((todo, i) => {
            return (
              <div className={todo.completed ? 'TodoItemCompleted' : 'TodoItem'} key={i} id={i} onClick={handleTodoClick}>
                <p id={i}>{todo.item}</p>

              </div>
            )
          })
        }
        <div className='Form'>
          <input onChange={handleChange} value={value}></input>
          <button onClick={handleSubmit}>Add Todo</button>
          <button onClick={handleDelete}>Delete Completed</button>
        </div>
      </div>



    </div>
  );
}

export default App;
