import { ALL_USERS } from '../actions/actionNames';

const initialState = {
    users: [],
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ALL_USERS:
            return {
                ...state,
                users: action.payload
            };
        
        default:
            return state;
    }
}

export default userReducer;