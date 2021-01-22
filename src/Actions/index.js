import Types from './Types';
import requester from '../Apis/requester';

export const GET_USERS = () => {
    return async function(dispatch) {
        const response =  await requester.get("/users");
        dispatch({type:Types.GET_USERS, payload:response.data});
        
    };
};

export const GET_POSTS = () => {
    return async function(dispatch) {
        const response =  await requester.get("/posts");
        dispatch({type:Types.GET_POSTS, payload:response.data});
        
    };
};
