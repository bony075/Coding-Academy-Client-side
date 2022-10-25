import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Category = () => {
    const courseByCategory = useLoaderData();
    return (
        <div className='grid gap-4 grid-cols-2'>
            {/* <h1>this is category {courseByCategory.length}</h1> */}
            {
                courseByCategory.map(course => <CourseCard
                    
                    key={course._id}
                    course={ course}
                ></CourseCard>)
            }
            
        </div>
    );
};

export default Category;