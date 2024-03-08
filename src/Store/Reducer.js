const initState = {
    counter : 0,
    price : 1000
}

const rootReducer = (state = initState , action) => {
    let newState;
    switch(action.type){
        case "INC":
            newState= {
                ...state,
                counter : state.counter + action.value,
            };
           
            break;
        case "DEC":
            newState = {
                ...state,
                counter : state.counter - action.value,
            }
            break;
            default:
                newState = state;
            break;
    }
    if(newState.counter < 0){
        newState.counter = 0
    }
    return newState;
}

export default rootReducer;