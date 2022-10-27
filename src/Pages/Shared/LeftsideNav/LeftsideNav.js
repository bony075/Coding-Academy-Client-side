import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";

const LeftsideNav = () => {
    const [categoris, setCategoris] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, []);
    return (
        <div>

            {/* <div className="btn-group btn-group-vertical">
                <button className="btn btn-active"><FaGoogle></FaGoogle> Google Sign in</button>

                <button className="btn"><FaGithub></FaGithub> GitHub Sign in</button>
            </div> */}



            <div>
                <h1 className='font-bold text-2xl mb-4'>Course Category:</h1>
                {
                    categoris.map(ct => <p key={ct.id}>

                        <NavLink className='btn btn-primary w-3/4 mb-2 ' to={`/category/${ct.id}`}>{ct.name}</NavLink>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftsideNav;