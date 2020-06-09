import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { getPosts } from "../store/actions/postAction";
import { IPost } from '../store/types';
import { RootState } from "../store/reducers";

import Post from "../components/Post";

export default function PostsList() {

    const posts: Array<IPost> = useSelector((store: RootState)=>store.post.posts);
    const loading: boolean = useSelector((store: RootState)=>store.post.loading);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
    }, []);

    return (
        <List>
            {loading && posts.map(item => {
            return (
                <li key={`id${item.id}`}>
                    <Post
                        key={`id${item.id}`}
                    id={item.id}
                    title={item.title}
                    body={item.body}/>
             </li>
        )})}
    </List>
    )
}


const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr [col-start]);
    justify-content: start;
    list-style-type: none;
    padding-left: 0;   
    @media(max-width: 992px) {
        grid-template-columns: repeat(2, 1fr [col-start]);
    }
    @media(max-width: 576px) {
        grid-template-columns: 1fr;
    }
`;