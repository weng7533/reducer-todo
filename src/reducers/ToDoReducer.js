
export const initialState = {
    Todolist: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589444
        },
        {
            item: 'Learn about API',
            completed: false,
            id: 3892987589
        },

    ]
}
export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADDTODO':
            return {
                Todolist:
                    [...state.Todolist,
                    {
                        item: action.payLoad.item,
                        completed: action.payLoad.completed,
                        id: action.payLoad.id
                    }

                    ]
            };

        default:
            return state;
    }

}



