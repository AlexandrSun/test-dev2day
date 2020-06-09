export const GET_POSTS = 'GET_POSTS';
export const GET_COMMENT = 'GET_COMMENT';
export const CREATE_POST = 'CREATE_POST';

export interface IComment {
    id: number,
    postId: number,
    body: string
}

export interface IPost {
    id: number,
    title: string,
    body: string
    comments?: Array<IComment>
}

export interface IStore {
    posts: Array<IPost>,
    post: IPost | null,
    loading: boolean,
    error: null | string
}

export interface IGetPostsAction {
    type: typeof GET_POSTS;
    payload: Array<IPost>;
}

export interface IGetCommentAction {
    type: typeof GET_COMMENT;
    payload: IPost;
}