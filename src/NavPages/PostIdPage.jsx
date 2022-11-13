import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom/cjs/react-router-dom";
import PostService from "../API/PostService";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoaded,] = useFetch(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    });
    const [fetchCommentsByPostId, isCommentsLoaded,] = useFetch(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById(params.id);
        // eslint-disable-next-line
    }, [])
    useEffect(() => {
        fetchCommentsByPostId(params.id);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {isPostLoaded
                ?
                <div>
                    <h1>Post #{post.id}</h1>
                    <div>
                        <strong>{post.title}</strong>
                        <div>{post.body}</div>
                    </div>
                    {isCommentsLoaded
                        ?
                        <div>
                            <h1>Comments</h1>
                            <div>
                                {comments.map(c =>
                                    <div key={c.id}>
                                        <strong>{c.email}</strong>
                                        <div>{c.body}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        : <Loader/>}
                </div>
                : <Loader/>
            }
        </div>
    );
};

export default PostIdPage;