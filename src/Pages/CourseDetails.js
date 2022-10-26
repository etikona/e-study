import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const {name, price, about} = course;
    return (
        <div className='bg-slate-50'>
           <div className="card w-96 bg-base-100 shadow-xl m-auto my-5"><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Course: {name}</h2><font></font>
    <p className='font-medium'>Price: {price}</p><font></font>
    <p>{about}</p><font></font>
    <div className="card-actions justify-end"><font></font>
      <button className="btn btn-slate-600 w-full">Get Access</button><font></font>
    </div><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default CourseDetails;