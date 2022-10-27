import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';



const Home = () => {
    const allCourse = useLoaderData();
    return (
        <>
            <h1 className='font-extrabold text-6xl text-center '>All Courses</h1>
            <div className='divider mb-12 w-1/2 mx-auto'></div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
           
            {
                allCourse.map(course => <CourseCard
                    key={course._id}
                    course={course}

                ></CourseCard>)

            }
            </div>
            </>
    );
};

export default Home;