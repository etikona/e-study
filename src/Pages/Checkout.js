import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
  const checkout = useLoaderData();
  console.log(checkout?.name, ' nam nei');
  // const {name} = checkout;
    return (
      <div className='bg-slate-200 p-5'>
          <div className='m-24 '>
            <h2 className='text-6xl p-5 font-semibold sm:font-normal text-green-600'>Congratulations!</h2>
            <p className='text-4xl p-5 font-medium text-green-600'>You have enroll  successfully.</p>
        </div>
      </div>
    );
};

export default Checkout;