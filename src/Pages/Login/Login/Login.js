import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
const Login = () => {
    // const notify = () => toast("ans");
    const [error, setError] = useState('');
    const [userEmail, setUserEmail] = useState('');


    const { providerLogin, signIn, forgetPassword } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;

                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success('Login Success');
            })
            .catch((error) => {
                // console.error('dfsjdfhjsdfhjksdfhsdfh', error.message)   
                setError(error.message)
            });
    }








    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e));
    }



    const githubProvider = new GithubAuthProvider();

    const handelGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(e => console.error(e))
    }


    const handelEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
        console.log(email);
    }

    const handelForgatePassword = () => {
        forgetPassword(userEmail)
            .then(() => {
                alert('password reset link send your mail');
            })
            .catch((e) => console.error(e));
    }



    return (




        <div className="hero  min-h-screen bg-base-200">

            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>

                <div className="card flex-shrink-0  w-96 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onBlur={handelEmailBlur} name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <label className="label">
                            <button onClick={handelForgatePassword} className="label-text-alt link link-hover">Forgot password?</button>
                        </label>
                        <div className="btn-group btn-group-vertical">
                            <button onClick={handelGoogleSignIn} className="btn mb-4 "><FaGoogle className='mr-2 text-green-400'></FaGoogle> Google Sign in</button>

                            <button onClick={handelGithubSignIn} className="btn"><FaGithub className='mr-2 '></FaGithub> GitHub Sign in</button>
                        </div>
                        <label className="label">
                            <Link to='../Register' className="label-text-alt link link-hover">You have no account? Please <span className='link-primary'>register</span> </Link>
                        </label>
                    </div>
                    <p className="py-6 text-error">{error}</p>
                    <p></p>
                </div>
            </div>
        </div >

    );
};

export default Login;