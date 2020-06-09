import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';
import { getPosts } from "../store/actions/postAction";

import Header from "../components/Header";
import Post from "../components/Post";

export default function Home() {

    const dispatch = useDispatch();
    const {posts, loading} = useSelector(state=>state.post);
    console.log(posts);

    useEffect(()=>{
        dispatch(getPosts())
    }, []);

    const Main = styled.div`
          padding: 40px;
`;

    const PostsList = styled.ul`
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
          list-style-type: none;
          padding-left: 0;   
`;

  return (
    <div className="container">
      <Header/>
      <Main>
          <PostsList>
          {loading && posts.map(item => {
              return (
                  <li>
                  <Post
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      body={item.body}/>
                  </li>
              )})}
          </PostsList>
      </Main>
    </div>
  )
}
