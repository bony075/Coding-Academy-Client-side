import React from 'react';
import { useLoaderData } from 'react-router-dom';
const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            <h1>this is course {course.details}</h1>
        </div>
    );
};

export default Course;