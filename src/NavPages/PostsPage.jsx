import React, {useEffect, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/Buttons/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import {useFetch} from "../hooks/useFetch";
import {usePagination} from "../hooks/usePagination";
import Pagination from "../components/UI/Pagination/Pagination";

const PostsPage = () => {

    const [posts, setPosts] = useState({data: [], count: 0});
    const [filter, setFilter] = useState({sortField: '', query: ''});
    const [modalVisible, setModalVisible] = useState(false);
    let postsPerPage = 10;

    const addNewPost = (post) => {
        setPosts({
            data: [...posts.data, post],
            count: ++posts.count
        });
        setModalVisible(false);
    };
    const deletePost = (post) => {
        setPosts({
            data: posts.data.filter(p => (p.id !== post.id)),
            count: --posts.count
        });
    };

    const [fetchPosts, isPostsLoaded, errorFetching] = useFetch(async (pl, pp) => {
        const postServiceResponse = await PostService.getPage(pl, pp);
        setPosts({
            data: postServiceResponse.data,
            count: +postServiceResponse.headers['x-total-count']
        });
    });
    const sortedSearchedPosts = usePosts(posts.data, filter);
    const [changePage, currentPage, pagesArray] = usePagination(posts.count, postsPerPage, fetchPosts);
    useEffect(() => {
        fetchPosts(postsPerPage, 1);
        console.log(`fetched ${currentPage} page`)
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <MyButton style={{marginTop: '30px'}}
                      onClick={() => setModalVisible(true)}>Make post</MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm addNewPost={addNewPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {isPostsLoaded
                ? <PostList deletePost={deletePost}
                            posts={sortedSearchedPosts}
                            errorFetching={errorFetching}
                            listTitle='Posts'/>
                : <Loader/>
            }
            <Pagination pagesArray={pagesArray}
                        currentPage={currentPage}
                        changePage={changePage}/>
        </div>
    );
};

export default PostsPage;