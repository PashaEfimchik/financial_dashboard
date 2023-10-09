import React from 'react';
import {Button, IconButton} from "@mui/material";
import eye_open from "../assets/eye-open.svg";
import eye_close from "../assets/eye-close.svg";
import login_arrow from "../assets/login-arrow.svg";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {login, loginSuccessUser} from "../actions/user"

interface LoginFormProps {
    handleLoginIsAuth: (isAuth: boolean) => void;
}

const LoginForm = (props: LoginFormProps) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loginError, setLoginError] = React.useState(false);
    const [isValidEmail, setIsValidEmail] = React.useState(true);
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }

    const handleLogin = (email: string, password: string) => {
        login(email, password, dispatch)
            .then((user) => {
                if (user) {
                    loginSuccessUser(user, dispatch).then(() => {
                        console.log("user logged in");
                    });
                    props.handleLoginIsAuth(true);
                    navigate('/financial_dashboard/home');
                } else {
                    setLoginError(true);
                }
            })
            .catch(() => setLoginError(true));
    };


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputEmail = e.target.value;
        setEmail(e.target.value);
        setLoginError(false);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(inputEmail));
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setLoginError(false);
    }

    return (
        <>
            <div className="App__login">
                <div className="app__container-login">
                    <div className="app__container-login--shadow-instance"></div>
                    <div className="app__container-login--slice-instance">
                        <div className="loginForm__container-wrap">
                            <div className="loginForm__container-content">
                                <form className="loginForm__container--form">
                                    <div className="loginForm__container-input-wrap">
                                        <div className="title__container-login">
                                            <div className="title__container--content-login">Log in</div>
                                        </div>
                                        <input
                                            className="loginForm__container--form-input email"
                                            placeholder="E-mail"
                                            type="text"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        <div className="loginForm__container--form-input-password-wrap">
                                            <input
                                                className={showPassword ? "loginForm__container--form-input email" : "loginForm__container--form-input password"}
                                                placeholder="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                            <div className={showPassword ? "loginForm__container--form-input-icon show" : "loginForm__container--form-input-icon hide"}>
                                                <IconButton
                                                    onClick={handleTogglePassword}
                                                >
                                                    {
                                                        showPassword ?
                                                            <img
                                                                src={eye_open}
                                                                alt="eye"
                                                                className="loginForm__container--form-input-icon-img"
                                                            />
                                                            :
                                                            <img
                                                                src={eye_close}
                                                                alt="eye"
                                                                className="loginForm__container--form-input-icon-img"
                                                            />
                                                    }
                                                </IconButton>
                                            </div>
                                        </div>
                                        <div className="loginForm__container--form-error-wrap">
                                            {loginError &&
                                                <div className="loginForm__container--form-error-content">
                                                    <img
                                                        src={require('../assets/login-error.svg').default}
                                                        alt="error"
                                                        className="loginForm__container--form-error-icon"
                                                    />
                                                    <span className="loginForm__container--form-error-text">
                                                        {
                                                            isValidEmail ?
                                                                "Incorrect E-mail or password" :
                                                                "Please enter a valid email address"
                                                        }
                                                    </span>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="loginForm__container--form-button-wrap">
                                        <Button
                                            className="loginForm__container--form-button"
                                            onClick={() => handleLogin(email, password)}
                                            variant="text"
                                        >
                                            <img
                                                src={login_arrow}
                                                alt="arrow"
                                                className="loginForm__container--form-button-icon"
                                            />
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="app__container-login--circle-shade-wrap">
                        <div className="app__container-login--circle-shade"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;