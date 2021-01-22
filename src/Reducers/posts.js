import Types from '../Actions/Types';

const posts = (state=[],action) => {
    if(action.type === Types.GET_POSTS) {
        return action.payload;
    }
    else {
        return state;
    }
};

export default posts;