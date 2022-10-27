import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeftsideNav = () => {
    const [categoris, setCategoris] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategoris(data))
    }, []);
    return (
        <div className='mt-12'>
            <div>
                <h1 className='font-bold text-2xl mb-4'>Course Category:</h1>
                {
                    categoris.map(ct => <p key={ct.id}>

                        <Link className='btn btn-primary w-3/4 mb-2 ' to={`/category/${ct.id}`}>{ct.name}</Link>
                    </p>
                    )
                }
            </div>
        </div>
    );
};

export default LeftsideNav;