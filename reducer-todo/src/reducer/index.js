export const ADD_TODO = "ADD_TODO";
export const TODO_STATE = "TODO_STATE";
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 38929875111
    },
    {
        item: 'Learn about reducers',
        completed: false,
        id: 389298758222
    }
]

export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                item: action.payload,
                completed: false,
                id: new Date().getTime()
            }];
        case TODO_STATE:

            const updatedTodo = {
                item: state[action.payload].item,
                completed: !state[action.payload].completed,
                id: state[action.payload].id
            };
            const todos = [...state];
            todos.splice(action.payload, 1, updatedTodo)
            return [...todos];

        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);

        default:
            return state; // do nothing, just return previous state unchanged
    }
}