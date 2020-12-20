import { React, useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth =>{
                history.push('/')
            })
            .catch(eror => alert(eror.message))
    }

    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                /*console.log(auth);
                alert("registered successfully!!");*/
                if(auth) {
                    history.push('/')
                }
            })
            .catch(eror => alert(eror.message))
    }

    return (
        <div className="login">
            <Link to="./">
            <img className="login__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon logo"
            />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={
                        e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {
                        e => setPassword(e.target.value) } />
                    <button type="submit" onClick={signIn}
                    className="login__signInButton">Sign In
                    </button>
                </form>

                <p>By signing-in you agree to the conditions of Use & Sale. Please 
                    see our Privacy Notice, our Cookies Notice, our Cookies Notice 
                    and our Internet-Based Ads Notice.
                </p>

                <button onClick={register}
                className="login__registerButton">Create your Account</button>
            </div>
        </div>
    )
}

export default Login
