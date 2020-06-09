import React, { useState } from "react";
import styled from 'styled-components';
import Header from "../../../components/Header";
import axios from "axios";

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const titleChange = event => {
        setTitle(event.target.value);
    };
    const textChange = event => {
        event.preventDefault();
        setText(event.target.value);
    };
    const createPostHandler = (e) => {
        e.preventDefault();
        const request = { title: title, body: text};
        axios
            .post(`https://simple-blog-api.crew.red/posts`, request)
            .then(response => { window.location.replace(`/posts/${response.data.id}`)
        });
    };

    return (
        <>
            <Header/>
            <Title>Create new post:</Title>
            <Card>
                <label htmlFor="blog-title">Title: </label>
                <input type="text" id="blog-title" name="blog-title" placeholder="Title..." value={title} onChange={titleChange}/>
                <label htmlFor="story">Post text: </label>
                <textarea id="story" name="story" rows={10} value={text} onChange={textChange}/>
                <Button type="submit" id="submitPost" onClick={createPostHandler}>Submit</Button>
            </Card>
        </>
    )
};
const Title = styled.h4`
    font-size: 22px;
    text-align: center;
    color: #333;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
    & input, textarea {
      margin-bottom: 20px;
    }
`;

const Button = styled.button`
    width: 140px;
    padding: 8px 20px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    background-color: #333;
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;