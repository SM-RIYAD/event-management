import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Event from "./Events/Event";

const Home = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((result) =>result.json()).then((data) =>setEvents(data))
    
      
   
      .catch((error) => console.log(error));
  }, []);


  console.log("ëvents are:",events );
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
       <div className="grid pb-32  gap-10 max-w-6xl mx-auto grid-cols-1  lg:grid-cols-2">

        {


        events.map((event,idx) =><Event key={idx} event={event} > </Event> )
        }



       </div>

    </div>
  );
};

export default Home;
