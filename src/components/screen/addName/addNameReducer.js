import { ADD_NAME } from './addNameAction';

const initialState = {
    name: 'david'
}

const addName = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NAME:
            return {
                ...state,
                payload: type.action
            }
        default: return state
    }
}
export default addName