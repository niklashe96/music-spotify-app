import React from 'react'
import './Login.css';
import { loginUrl } from '../spotify'

function Login() {
    return (
        <div className="login">
            <img
                // src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                src="https://i.pinimg.com/originals/27/46/92/2746926686105239e1262ee3879c534a.gif"
                alt="" />

            <a href={loginUrl}>Login with Spotify account</a>

            <p className = "description"> (This app uses the Spotify API so you need a spotify account to test this app.) </p>
        </div>
    )
}

export default Login