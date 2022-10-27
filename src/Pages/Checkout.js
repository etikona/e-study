import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const [info, setInfo] = useState([]);
  
  const currentInfo = async(id) =>{
    const url = `https://e-study-server.vercel.app/checkout/${id}`
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setInfo(data);
}

  // `https://e-study-server.vercel.app/checkout/${id}`
  // const {name} = checkout;
    return (
      <div className='bg-slate-200 p-5'>
          <div className='m-24 '>
            <h2 className='text-6xl p-5 font-semibold sm:font-normal text-green-600'>Congratulations!{info.name}</h2>
            <p className='text-4xl p-5 font-medium text-green-600'>You have enroll  successfully.</p>
        </div>
      </div>
    );
};

export default Checkout;