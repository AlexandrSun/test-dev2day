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
        console.log(`Title: ${title} --- Text: ${text}`);
        const request = { title: title, body: text};
        axios
            .post(`https://simple-blog-api.crew.red/posts`, request)
            .then(response => {
                console.log(response.data);
        });
    };

    return (
        <>
            <Header/>
            <Card>
                <p>Create new post:</p>
                <label htmlFor="blog-title">Title: </label>
                <input type="text" id="blog-title" name="blog-title" placeholder="Title..." value={title} onChange={titleChange}/>
                <label htmlFor="story">Post text: </label>
                <textarea id="story" name="story" value={text} onChange={textChange}/>
                <button type="submit" id="submitPost" onClick={createPostHandler}>Submit</button>
            </Card>
        </>
    )
};

const Card = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
    & input, textarea {
      margin-bottom: 20px;
    }
`;