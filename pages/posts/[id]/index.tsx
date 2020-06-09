import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import {getComments} from "../../../store/actions/postAction";
import Header from "../../../components/Header";
import { IPost } from "../../../store/types";
import { RootState } from "../../../store/reducers/index";


export default function PostPage() {
    const router = useRouter();
    const id = Number(router.query.id);

    const dispatch = useDispatch();
    const post: IPost = useSelector((store: RootState)=>store.post.post);

    useEffect(()=>{
        dispatch(getComments(id))
    }, []);

    return (
        <>
            <Header/>
        {post &&
        <Card>
            <CardTitle>{post.title}</CardTitle>
            <CardText>{post.body}</CardText>
            <Comment>Comments: </Comment>
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