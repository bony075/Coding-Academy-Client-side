import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowLeft, FaDownload } from "react-icons/fa";

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Course = () => {
    const course = useLoaderData();
    return (
        <div className='text-center items-center' ref={ref}>
            <h2 className="card-title font-bold text-6xl justify-center mb-6">{course.title}</h2>
            <div className="card card-compact w-full bg-base-100 shadow-xl" >
                <figure ><img className='' src={course.image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p>{course.details}</p>
                    <div className="card-actions justify-between">
                        <Link to={`/category/${course.category_id}`}>
                            <button className="btn btn-primary hover:bg-success"><FaArrowLeft className='mr-2'></FaArrowLeft> Back Category</button>
                        </Link>

                        <Pdf targetRef={ref} filename="Course.pdf">
                            {({ toPdf }) => <button className='btn btn-success text-white' onClick={toPdf}><FaDownload className='mr-2'></FaDownload> Download</button>}
                        </Pdf>

                        <Link to={'/checkout'}><button className="btn btn-primary hover:bg-red-500">Get Premium Access</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;