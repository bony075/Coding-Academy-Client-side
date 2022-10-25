import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>this is course {course.details}</h1>
            <Link to={`/category/${course.category_id}`}>
                <button className="btn btn-primary w-full">Back Category</button>
            </Link>
        </div>
    );
};

export default Course;