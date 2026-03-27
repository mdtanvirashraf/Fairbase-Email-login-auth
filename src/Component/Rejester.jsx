import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../assets/Fairebase/Fairebase.init';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router';


const Rejester = () => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [pass, setPass] = useState('')
    const [passwordSho, setPasswordSho] = useState(false)


    const handelFromSubmit = (event) => {

        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        const checkbox = event.target.checkbox.checked;
        console.log("click", email, password, checkbox)

        const passwordLeangthchake = /^.{8,}$/;
        const passwordUpercaseLowercase = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/
        const passwordEspacelaChase = /^(?=.*[^A-Za-z0-9]).{8,}$/
        if (!checkbox) {
            setError('red all turm and conditon & accept turme anditon')
            return;
        }

        if (!passwordLeangthchake.test(password)) {
            setError("Password must be 8 cracter neacary");
            return;
        }
        else if (!passwordUpercaseLowercase.test(password)) {
            setError("Password be given 1 upercase & 1 lowercase");
            return;
        }
        else if (!passwordEspacelaChase.test(password)) {
            setError("Must be given Specal Character")
            return;
        }

        setUser("")
        setError('');
        setPass('');
        createUserWithEmailAndPassword(auth, email, password)

            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error.message)
                setError(error.message)

            })
    }
    const handelPasswordSho = (event) => {
        event.preventDefault();
        setPasswordSho(!passwordSho)
    }


    return (
        <div>
            <title>Rejester</title>
            <form onSubmit={handelFromSubmit}>
                <div className="hero bg-base-200 min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Regester now</h1>

                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email"
                                        className="input"
                                        placeholder="Email"
                                        name='email' />
                                    <label className="label">Password</label>
                                    <div className='relative'>
                                        <input type={passwordSho ? "text" : "password"}
                                            className="input"
                                            placeholder="Password"
                                            name='password' />
                                        <button onClick={handelPasswordSho} className='absolute top-3 right-6'>{passwordSho ? <EyeOff /> : <Eye />}</button>
                                    </div>

                                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border pr-10">
                                        <legend className="fieldset-legend">Rejester oftion</legend>
                                        <label className="label">
                                            <input type="checkbox" className="checkbox"
                                                name='checkbox' />
                                            Remember all turm and condition
                                        </label>
                                    </fieldset>
                                    <button className="btn btn-neutral mt-4">Regester</button>
                                </fieldset>
                                <p className='text-red-600'>{error}</p>
                                {
                                    pass && <p className='text-green-600'>Account created suesfully</p>
                                }
                            </div>
                            <p className='m-5'>You have Alwarady Account. Pleace <Link to="/login" className='text-blue-700 underline'>Log In</Link></p>
                        </div>

                    </div>
                    <div>
                        <img src={user.photoURL} alt="" />
                        <h1>{user.
                            displayName}</h1>
                        <h3>{user.email}</h3>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Rejester;