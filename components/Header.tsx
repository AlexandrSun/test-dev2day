import React from "react";
import Link from "next/link";
import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Roboto,
        Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
        sans-serif;
    }`;

export default function Header() {

    return (
    <>
        <GlobalStyle />
        <MainHead>
            <Link href="/">
                <a>Developers2day blog</a>
            </Link>
            <Link href="/posts/new">
                <a>Create new post</a>
            </Link>
        </MainHead>
    </>
    )
}

const MainHead = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        height: 60px;
        padding: 0 40px;
        margin: 0;
        background-color: #333;
        color: #fff;
        & a {
          font-size: 18px;
          color: #fff;
          text-decoration: none;
        }
`;
