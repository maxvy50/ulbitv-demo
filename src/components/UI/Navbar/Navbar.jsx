import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context/context";
import MyButton from "../Buttons/MyButton";

const Navbar = () => {
    const {isUserAuth, setIsUserAuth} = useContext(AuthContext);
    return (
        <div className="navbar">
            <Link className={'nb-link'} to={'/about'}>
                About
            </Link>
            <Link className={'nb-link'} to={'/posts'}>
                Posts
            </Link>
            {isUserAuth &&
                <div className={'nb-btn-div'}>
                    <MyButton onClick={() => setIsUserAuth(false)}>
                        Log out
                    </MyButton>
                </div>
            }
        </div>
    );
};

export default Navbar;