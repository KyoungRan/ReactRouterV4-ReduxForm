import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        // return _.reject(state, post => post === action.payload);
        case FETCH_POST:
            // const post = action.payload.data;
            // const newState = { ...state };
            // newState[post.id] = post;
            // return newState;
            // same here~
            return { ...state, [action.payload.data.id]: action.payload.data };
        case FETCH_POSTS:
            // console.log(action.paylosd.data);   // [ post1, post2 ]
            // { 4: post }
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
