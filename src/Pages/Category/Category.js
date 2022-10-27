import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Category = () => {
    const courseByCategory = useLoaderData();
    return (
        
            
            <div className='grid gap-4 lg:grid-cols-2 mt-12'>

                {
                    courseByCategory.map(course => <CourseCard

                        key={course._id}
                        course={course}
                    ></CourseCard>)
                }

            </div>
        
    );
};

export default Category;