import React from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../Assets/thumbnail.png';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200"><font></font>
  <div className="hero-content flex-col lg:flex-row"><font></font>
    <img src={thumbnail} className="max-w-sm rounded-lg shadow-2xl" /><font></font>
    <div><font></font>
      <h1 className="text-5xl font-bold">Welcome to E-Study!</h1><font></font>
      <p className="py-6">With more than 10 years of experience of working in the IT industry, <br /> we intend to share with you what works.
You will be guided to prepare <br />  yourself for the  IT industry. No need to waste time in traffic jam. <br /> A good internet connection is all you need to start learning!</p><font></font>
    <Link to='/courses'>  <button className="btn btn-primary">Get Started</button></Link> <font></font>
    </div><font></font>
  </div><font></font>
</div>
        </div>
    );
};

export default Home;