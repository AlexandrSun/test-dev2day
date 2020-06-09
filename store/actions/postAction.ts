import axios from 'axios';
import * as types from '../types';

export const getPosts = () => async dispatch => {
    const res = await axios
        .get('https://simple-blog-api.crew.red/posts');
        const safeRes = res.data.filter(item => {
        return ((item.title) && (item.body) && (typeof item.id == 'number'))
    });
    dispatch({
        type: types.GET_POSTS,
        payload: res.data
    })
};

export const getComments = (id: number) => async dispatch => {
    const res = await axios
        .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
    dispatch({
        type: types.GET_COMMENT,
        payload: res.data
    })
};