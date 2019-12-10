
export const initialState = {
    Todolist: [
        {
            item: 'Learn about reducers1',
            completed: false,
            id: 3892987589444
        },
        {
            item: 'Learn about API2',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about API3',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn about API4',
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
        case 'TOGGLE':
            return {
                Todolist:
                    state.Todolist.map((list, index) => {
                        if (list.item === action.payLoad.item) { list.completed = !list.completed }
                        return list;
                    })

            }

        case 'CLEARCOMPLETED':
            return {
                Todolist:
                    // state.Todolist.map((list, index) => {
                    //     if (list.completed !== true) {
                    //         return list;
                    //     }
                    // })
                    state.Todolist.map((list, index) => {
                        //     return {
                        //         item: 'trying to clean',
                        //         completed: false,
                        //         id: 3892987589
                        //     }
                        // })

                        if (list.completed == false) {
                            return list;
                        } else {
                            return {}
                        }

                    })

            }



        default:
            return state;
    }

}



