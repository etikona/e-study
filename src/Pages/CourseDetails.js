import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    const {name, price, about} = course;
    return (
        <div className='bg-slate-200 p-5'>
           <div className="card w-96 bg-slate-100 shadow-xl m-auto my-5"><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">Course: {name}</h2><font></font>
    <p className='font-medium text-purple-600'>Price: {price}</p><font></font>
    <p>{about}</p><font></font>
    <div className="card-actions justify-end"><font></font>
    <Link to='/checkout' className='btn btn-slate-600 w-full'>Get Access </Link>

     
    </div><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default CourseDetails;