"use client"
import React,{useState} from "react";
import './Styles/StylesLogin.css';


const Login = () =>{

    return(
        <div className="container">
            <div className="bottom-text">
                <h3 className="text">KAWAI <span>HOME</span></h3>
            </div>
            <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" placeholder="Username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder="Password"/>
                <button>Login</button>
            </form>
            <div className="ear-l"></div>
            <div className="ear-r"></div>
            <div className="panda-face">
                <div className="blush-l"></div>
                <div className="blush-r"></div>
                <div className="eye-l">
                    <div className="eyeball-l"></div>
                </div>
                <div className="eye-r">
                    <div className="eyeball-r"></div>
                </div>
                <div className="nose"></div>
                <div className="mouth"></div>
            </div>
            <div className="hand-l"></div>
            <div className="hand-r"></div>
            <div className="paw-l"></div>
            <div className="paw-r"></div>
        </div>
    )
}

export default Login;
