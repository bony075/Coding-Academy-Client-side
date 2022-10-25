import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';

const Category = () => {
    const courseByCategory = useLoaderData();
    return (
        <div className='grid gap-4 grid-cols-2'>
       
        </div>
    );
};

export default Category;