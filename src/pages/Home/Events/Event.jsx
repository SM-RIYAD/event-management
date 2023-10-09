
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Event = ({event}) => {

useEffect(() => {  AOS.init();},[]);

    const {name,id,image,short_description,price,detailed_description}=event;
  return (
    <div className="pb-6 ">
      <div data-aos="zoom-in" className="card   lg:h-60 lg:card-side md:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2 md:w-1/2  ">
          <img className="object-fill rounded-xl lg:h-full lg:w-auto"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{short_description}</p>
          <p className="text-gray-400">{price}</p>
          <div className="card-actions justify-start">

            <Link to ={`eventdetails/${id}`}>   <button className="btn btn-primary bg-red-600 btn-primary border-0 text-white">Detail</button> </Link>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
