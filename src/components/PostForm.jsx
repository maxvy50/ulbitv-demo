import React, {useState} from 'react';
import MyInput from "./UI/Inputs/MyInput";
import MyButton from "./UI/Buttons/MyButton";

const PostForm = ({addNewPost}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const prepareNewPost = (e) => {
        e.preventDefault();
        addNewPost({...post, id: Date.now()});
        setPost({title: '', body: ''});
    }

    return (
        <form>
            <MyInput type='text'
                     placeholder='Title'
                     value={post.title}
                     onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type='text'
                     placeholder='Body'
                     value={post.body}
                     onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={prepareNewPost}>Publish</MyButton>
        </form>
    );
};

export default PostForm;