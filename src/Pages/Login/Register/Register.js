import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
const Register = () => {
    const [error, setError] = useState('');



    const { createUser, updateUserProfile } = useContext(AuthContext);



    const handelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handelupdateUserProfile(name, photoURL);
                toast.success('Thanks for register')
            })
            .catch((error) => {
                // console.error('dfsjdfhjsdfhjksdfhsdfh', error.message)   
                setError(error.message)
                console.log('dsfsfsf', error);
            });

    }

    const handelupdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch((e) => console.error(e));
    }



    return (

        <form onSubmit={handelSubmit} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6 text-red-600">{error}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 w-96">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Type your photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>

                        <label className="label">
                            <Link to='../Login' className="label-text-alt link link-hover">Already You have no account? Please Login</Link>
                        </label>

                    </div>
                </div>
            </div>
        </form>


    );
};

export default Register;