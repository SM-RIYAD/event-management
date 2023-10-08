import React from 'react';
import Header from '../Home/Header/Header';

const Opinion = () => {
    return (
        <div>

            <Header></Header>

           <div className='mx-auto '>

           <div className=" max-h-4 mx-5  card  bg-base-100 shadow-xl image-full">
  <figure className='object-fill '><img className='object-fill w-full ' src="https://images.pexels.com/photos/18482086/pexels-photo-18482086/free-photo-of-landscape-wallpaper-valley-and-mountains-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Shoes" /></figure>
  <div className="card-body p-32">
    <h1 className='text-2xl'>
        Give us your honest opinion
    </h1>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button className='btn btn-primary bg-red-600 mt-5 border-0 text-white'>Submit </button>
  </div>
</div>


           </div>
        </div>
    );
};

export default Opinion;