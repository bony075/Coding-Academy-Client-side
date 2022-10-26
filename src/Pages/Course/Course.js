import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img src={course.image_url } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ course.title}</h2>
                    <p>{ course.details}</p>
                    <div className="card-actions justify-between">
                       

                        
                            <Link  to={`/category/${course.category_id}`}>
                                <button className="btn btn-primary hover:bg-success"><FaArrowLeft className='mr-2'></FaArrowLeft> Back Category</button>
                            </Link>
                        <Link to={'/checkout'}><button className="btn btn-primary hover:bg-red-500">Buy Now</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;