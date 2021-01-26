import React, { useState } from 'react';
import { auth } from '../firebase';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');


    const signIn = (e) => {
        e.preventDefault();
    }

    const register = () => {
        console.log('Before alert');
        if (!name) {
            return alert('Please enter a full name!')
            
        }
    }

    return (
        <div className="login">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2013.svg" 
                alt=""/>
            <form>
                <input 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full name ( required if registering)"
                    />
                <input 
                    value={profilePic} 
                    onChange={ e => setProfilePic(e.target.value) } 
                    type="text" 
                    placeholder="Profile pic URL (optiona)"
                    />
                <input 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    type="email" placeholder="Email"
                    />
                <input 
                    value={password} 
                    onChange={e => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password"
                    />
                <button 
                    onClick={signIn}
                    type="submit"
                    >Sign In</button>
            </form>
            <p>Not a member?&nbsp;
                <span
                    onClick={register} 
                    className="login__register">
                    Register Now
                </span>
            </p>
        </div>
    )
}

export default Login
