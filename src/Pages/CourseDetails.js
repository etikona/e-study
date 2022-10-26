import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

// import ReactToPdf from "react-to-pdf"
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { useRef } from 'react';
import Checkout from './Checkout';

const CourseDetails = () => {
    const course = useLoaderData();
    const {name, price, about, img} = course;
   const exampleRef = useRef();
    return (
        <div className='bg-slate-200 p-5'>
           <div className="card w-96 bg-slate-100 shadow-xl m-auto my-5"><font></font>
  <div className="card-body"><font></font>
  <div className='d-flex'>
    <h2 className="card-title">Course: {name}</h2><font></font>

        {/* Download PDF File */}

    <Pdf targetRef={exampleRef} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>
        <ArrowDownTrayIcon style={{width: 20}}></ArrowDownTrayIcon>
            </button>}
      </Pdf>
      </div>
    
  

  </div>
    <p className='font-medium text-purple-600'>Price: {price}</p><font></font>
    <img className='h-40 w-50' src={img} alt=""  />
    <p ref={exampleRef} >{about}</p><font></font>
    <div className="card-actions justify-end"><font></font>
    <Link to='/checkout' className='btn btn-slate-600 w-full'>
       Get Access
       
         </Link>

      
    </div><font></font>
  </div><font></font>
</div>

       
    );
};

export default CourseDetails;