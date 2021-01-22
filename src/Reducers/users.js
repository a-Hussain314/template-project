import Types from '../Actions/Types';

const users = (state=[],action) => {
    if(action.type === Types.GET_USERS) {
        return action.payload;
    }
    else {
        return state;
    }
};

export default users;