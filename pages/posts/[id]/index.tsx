import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import {getComments} from "../../../store/actions/postAction";
import Header from "../../../components/Header";
import { IPost } from "../../../store/types";
import { RootState } from "../../../store/reducers/index";
import axios from "axios";


export default function PostPage() {
    const [text, setText] = useState('');
    const router = useRouter();
    const id = Number(router.query.id);

    const dispatch = useDispatch();
    const post: IPost = useSelector((store: RootState)=>store.post.post);

    useEffect(()=>{
        dispatch(getComments(id))
    }, []);

    const textChange = (e) => {
        e.preventDefault();
        setText(e.target.value)
    };

    const deletePost = (e) => {
        e.preventDefault();
        axios
            .delete(`https://simple-blog-api.crew.red/posts/${id}`)
            .then(response => { window.location.replace(`/`)
            });
    };
    const addComment = (e) => {
        e.preventDefault();
        const request = { postId: id, body: text};
        axios
            .post(`https://simple-blog-api.crew.red/comments`, request)
            .then(response => { window.location.replace(`/posts/${id}`)
            });
    };

    return (
        <>
            <Header/>
        {post &&
        <Card>
            <CardTitle>{post.title}</CardTitle>
            <CardText>{post.body}</CardText>
            {(post.comments.length > 0) && <Comment>Comments: </Comment>}
            <Comments>
            {(post.comments) &&
                post.comments.map((comment, index) => {
                return (
                    <li key={`${index}${comment.id}`}>
                        <Comment>{comment.body}</Comment>
                    </li>
                )})
            }
            </Comments>
            <CommentArea id="story" name="story" rows={5} cols={40} value={text} onChange={textChange}/>
            <BtnWrapper>
                <Button type="submit" id="addComment" onClick={addComment}>Add Comment</Button>
                <Button type="submit" id="deletePost" onClick={deletePost}>Delete Post</Button>
            </BtnWrapper>

        </Card>
        }
        </>
    )
};

const Card = styled.div`
  margin: 40px;
`;
const CardTitle = styled.h4`
  font-size: 22px;
  font-weight: 500;
  color: #15171A;
  margin: 0 auto 10px;
`;
const CardText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #738A94;
  margin-bottom: 16px;
`;
const Comments = styled.ul`
  list-style-type: none;
  padding-left: 0;   
`;
const Comment = styled.p`
  font-size: 14px;
  color: #333333;
  font-style: italic;
`;
const CommentArea = styled.textarea`
    border: 1px solid #333;
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 12px;
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
const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;