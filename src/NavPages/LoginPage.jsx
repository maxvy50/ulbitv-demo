import React, {useContext} from 'react';
import MyInput from "../components/UI/Inputs/MyInput";
import MyButton from "../components/UI/Buttons/MyButton";
import {AuthContext} from "../context/context";
import {useHistory} from "react-router-dom/cjs/react-router-dom";

const LoginPage = () => {
    const router = useHistory();
    const {isUserAuth, setIsUserAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsUserAuth(true);
        router.push('/posts');
    };

    return (
        <div>
            <h1>Please enter your credits</h1>
            <form onSubmit={login}>
                <MyInput type={'text'} placeholder={'Login'}/>
                <MyInput type={'password'} placeholder={'Password'}/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default LoginPage;