import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css'

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Password don't match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("http://localhost:8800/api/auth/register", user);
                history.push("/Login")
            } catch (err) {
                console.log(err)
            }
        }
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
                        <input
                            placeholder="Username"
                            ref={username}
                            required
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            type="email"
                            ref={email}
                            required
                            className="loginInput"
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            ref={password}
                            required
                            className="loginInput"
                            minLength="6"
                        />
                        <input
                            placeholder="Password Again"
                            type="password"
                            required
                            ref={passwordAgain}
                            className="loginInput"
                        />
                        <button className="loginButton" type="submit">
                            Sign Up</button>
                        <button className="loginRegisterButton">Login into your Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
