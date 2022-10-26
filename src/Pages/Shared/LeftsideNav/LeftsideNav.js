import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

                {
                    categoris.map(ct => <p key={ct.id}>

                        <Link className='link link-primary' to={`/category/${ct.id}`}>{ct.name}</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftsideNav;