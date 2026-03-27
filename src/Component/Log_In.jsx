import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../assets/Fairebase/Fairebase.init';

const Log_In = () => {
    const [error, setError] = useState('')
    const [user, setUser] = useState("")
    const handelLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log("click", email, password)

        setError("")
        setUser('')
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
                setUser(result.user);
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            });
    }

    return (
        <div>
            <title>Log In</title>

            <form onSubmit={handelLogin}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </div>
                            <div>
                                {
                                    error && <p>{error.message}</p>
                                }
                                <div>
                                    <img src={user.photoURL} alt="" />
                                    <h1>{user.
                                        displayName}</h1>
                                    <h3>{user.email}</h3>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Log_In;