import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({deletePost, posts, listTitle, errorFetching}) => {
    if (posts.length)
    return (
        <div>
            <h1>{listTitle}</h1>
            <TransitionGroup>
                {posts.map(p => (
                    <CSSTransition key={p.id} timeout={500} classNames={'post'}>
                        <PostItem deletePost={deletePost} post={p}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>);
    else return (
        errorFetching
            ?
                <h1>${errorFetching}</h1>
            :
                <h1>There are no posts yet</h1>
    );
};

export default PostList;