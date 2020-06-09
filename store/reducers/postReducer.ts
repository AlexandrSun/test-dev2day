import * as types from '../types';

const initialState: types.IStore = {
    posts: [],
    post: null,
    loading: false,
    error: null
};

export const postReducer = (
    state = initialState,
    action: types.IGetPostsAction | types.IGetCommentAction
) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: true,
                error: null
            };
        case types.GET_COMMENT:
            return {
                ...state,
                post: action.payload,
                error: null
            };
        default:
            return state;
    }
};