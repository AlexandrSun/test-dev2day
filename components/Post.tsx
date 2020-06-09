import React from 'react';
import styled from 'styled-components';
import Link from "next/link";

type PropsType = {
    id: number,
    title: string,
    body: string
};

const Post: React.FC<PropsType> = ({ id, title = "", body = ""}) => {

    return (
        <Card>
            <CardTitle>{title}</CardTitle>
            <CardText>{body}</CardText>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
                <LinkMore>View More</LinkMore>
            </Link>
        </Card>
    )
};

export default Post;

const Card = styled.div`
  min-width: 300px;
  padding: 40px 20px;
  box-sizing: border-box;
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
const LinkMore = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #333333;
  cursor: pointer;
`;