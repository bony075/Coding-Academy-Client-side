import React from 'react';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
  return (
    <div>
      {/* <h1>{course.title}</h1> */}
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          {
            course.details.length > 50 ?
              <p>{course.details.slice(0, 50) + '....'}<Link to={`/course/${course._id}`} className='link link-primary'>Read more</Link></p>:
          <p>{course.details}</p>
          }
          <div className='divider'></div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary w-full">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;