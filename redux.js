const redux = require('redux');

const createStore = redux.createStore;

const initState = {
    counter : 3,
}

const rootReducer = (state = initState , action) => {
    /* if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value,
        }
    }else if(action.type === 'DEC_COUNTER'){
        return{
            ...state,
            counter: state.counter - action.value,
        }
    }else if(action.type === 'RESET') {
        return{
            ...state,
            counter:0,
        }
    }else{
        return state;
    } */
    let newState;
    switch(action.type){
        case "INC_COUNTER":
            newState = {
                ...state,
                counter: state.counter + action.value,
            }
            break;
        case "DEC_COUNTER":
            newState = {
                ...state,
                counter : state.counter - action.value,
            }
            break;
        case "RESET":
            newState = {
                ...state,
                counter: 0,
            }
            break;
            default:
            newState = state;
            break;

    }
    return newState;
}

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type : 'INC_COUNTER',
    value : 1
});

store.dispatch({
    type : 'DEC_COUNTER',
    value: 1
});

store.dispatch({
    type: 'RESET',
})