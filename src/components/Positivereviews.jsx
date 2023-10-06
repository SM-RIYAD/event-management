import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
const Positivereviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
      fetch("review.json")
        .then((result) =>result.json()).then((data) =>setReviews(data))
      
        
     
        .catch((error) => console.log(error));
    }, []);
  

    
    return (
        <div className=' py-20'> 
        <p className='text-4xl py-5 ps-5 font-bold text-center '> Recent Reviews</p>
        
            <Marquee>

                {
                    

                  reviews.map((review,idx) =><ReviewCard key={idx} unique_review={review}></ReviewCard>)


                }
            </Marquee>
         
        </div>
    );
};

export default Positivereviews;