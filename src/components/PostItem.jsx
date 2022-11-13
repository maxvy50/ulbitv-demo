import React from 'react';
import MyButton from "./UI/Buttons/MyButton";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const PostItem = ({deletePost, post, ...props}) => {
    const router = useHistory();

    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{post.id}. {post.title}</strong>
                <div>{post.body}</div>
            </div>
            <div className='post-buttons'>
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Show</MyButton>
                <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
            </div>
        </div>
    );
};

export default PostItem;