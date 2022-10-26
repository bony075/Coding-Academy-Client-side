import React from 'react';
import { Link } from 'react-router-dom';
const CourseCard = ({ course }) => {
  console.log('asfdsfs',course);
  return (
    <div>
      {/* <h1>{course.title}</h1> */}
      <div className="card w-auto bg-base-100 shadow-xl">
        <figure ><img className='' src={course.image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{course.title }</h2>
          {
            course.details.length > 50 ?
              <p>{course.details.slice(0, 50) + '....'}Read more</p>:
          <p>{course.details}</p>
          }
          <div className='divider'></div>
          <div className="card-actions justify-end">

            <Link className="btn btn-primary w-full" to={`/course/${course._id}`} ><button >Details</button></Link>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;