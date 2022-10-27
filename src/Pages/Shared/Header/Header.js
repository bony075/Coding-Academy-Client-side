import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { FaUser, FaUserAlt } from "react-icons/fa";
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogOut = () => { 
        logOut()
            .then(() => { })
            .catch(e => console.error(e));
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Courses</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-8 rounded mr-2' src='lgo.png' />Coding Academy</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'
                        className={ 
                            ({isActive})=>isActive? 'bg-amber-600':''
                        }
                    >Courses</Link></li>
                    <li><Link to='/blog' >Blog</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.uid ?
                        <>
                            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                                <button className=""><div className="avatar">
                                    <div className="w-16 rounded-full">
                                        {
                                            user?.photoURL ?
                                                <img src={user?.photoURL} /> : <FaUser></FaUser>
                                        }
                                    </div>
                                </div>
                                </button>
                            </div>
                                <button className='btn btn-primary ml-4' onClick={handelLogOut}>Log Out</button>
                        </>
                        :
                        <>
                            <Link className='btn btn-primary' to='/login'>Login</Link>
                            <Link className='btn btn-success ml-2' to='/register'>Register</Link>
                        </>
                }





                
                {/* <p>{user?.displayName}</p>

                <div className="avatar">
                    <div className="w-1/2 rounded-full">
                        <img  src={user?.photoURL} />
                    </div>
                </div>
                <p></p> */}
                {/* <Link to='/' className="btn">Get started</Link> */}
                {/* <Link className='ml-2' to='/login'><button className="btn">Login</button></Link> */}
                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="default-toggle" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
            </div>
        </div>
    );
};

export default Header;