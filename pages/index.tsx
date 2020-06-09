import React from "react";
import styled from 'styled-components';

import Header from "../components/Header";
import PostsList from "../components/PostsList";

export default function Home() {

  return (
    <div className="container">
      <Header/>
      <Main>
          <PostsList />
      </Main>
    </div>
  )
}

const Main = styled.div`
  margin: 20px;
`;
