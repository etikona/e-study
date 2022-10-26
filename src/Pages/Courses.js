import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Courses.css';
const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <div className='grid grid-cols-3 gap-4 bg-slate-200'>
       <div className='  col-span-2 grid md:grid-cols-3 '>
        {
            courses.map(course => 
                    <div className=''>
                                    <div className="card w-60  gap-x-3 m-5 bg-base-100 shadow-xl "><font></font>
  <figure><img src={course.img} alt="Shoes" /></figure><font></font>
  <div className="card-body"><font></font>
    <h2 className="card-title">{course.name}</h2><font></font>
    <p> {course.price}</p><font></font>
    <div className="card-actions justify-end"><font></font>
      <button className="btn btn-primary">Continue</button><font></font>
    </div><font></font>
  </div><font></font>
</div>
                    </div>
                )
        }
       </div>
       <div className=' p-5 lg:w-48 ml-24 col-span-1'>
   {
    courses.map(course => 
 <table className='mb-5 ml-3'>
       <tr>
<th>{course.id}</th>

<td>{course.name}</td>
    </tr>
 </table> )
   }
      </div>
      </div>
    );
};

export default Courses;