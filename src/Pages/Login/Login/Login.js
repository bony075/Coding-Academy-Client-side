import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);

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
            })
            .catch(error => console.error(error))
    }




    
    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () => { 
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
        .catch(e=>console.error(e))
    }






    return (
        <form onSubmit={handelSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="btn-group btn-group-vertical">
                            <button onClick={handelGoogleSignIn} className="btn mb-4"><FaGoogle></FaGoogle> Google Sign in</button>

                            <button className="btn"><FaGithub></FaGithub> GitHub Sign in</button>
                        </div>
                        <label className="label">
                            <Link to='../Register' className="label-text-alt link link-hover">You have no account? Please <span className='link-primary'>register</span> </Link>
                        </label>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;