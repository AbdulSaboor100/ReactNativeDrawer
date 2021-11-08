   
export let data = {
    name : {}
  
}

export function reducer(state, action) {
    switch (action.type) {
        case "ADD_NAME": {
            return {
                ...state,
                name: action.payload
            }
        }
        
        default:
            return state;

    }
}