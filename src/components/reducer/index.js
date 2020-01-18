const initialState = {
    array: [
        { id: 0, image: '1.png', status: false },
        { id: 1, image: '2.png', status: false },
        { id: 2, image: '3.png', status: false },
        { id: 3, image: '4.png', status: false },
        { id: 4, image: '5.png', status: false },
        { id: 5, image: '6.png', status: false },
        { id: 6, image: '7.png', status: false },
        { id: 7, image: '8.png', status: false },
        { id: 8, image: '1.png', status: false },
        { id: 9, image: '2.png', status: false },
        { id: 10, image: '3.png', status: false },
        { id: 11, image: '4.png', status: false },
        { id: 12, image: '5.png', status: false },
        { id: 13, image: '6.png', status: false },
        { id: 14, image: '7.png', status: false },
        { id: 15, image: '8.png', status: false }
    ]
}

const reducer = (state = initialState, actions) => {
    switch(actions.type){
        case 'GET_CARDS':
            return state
        default:
            return state
    }
}

export default reducer;
