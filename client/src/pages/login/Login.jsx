import './Login.css'
import { useContext, useRef } from 'react';
import { loginCall } from "../../apiCalls";
import { AuthContext } from '../../context/AuthContext';
import LoadingIndicator from './LoadingIndicator';

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { /*user*/ isFetching, /*error*/ dispatch } = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch)
    };

    return (
        <div className="login ">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with Friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required minLength="6" className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}> {isFetching ? (<LoadingIndicator />) : ("Log In")} </button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <LoadingIndicator /> : "Create a new account"}</button>
                    </form>
                </div>
            </div>
        </div>
    )

}