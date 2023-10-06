import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EventDetails from "../components/EventDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        children: [
            {
                path: '/',
                element: <Home></Home>, 
            
            }, 
            {
                path: '/eventdetails/:event_id',
                element: <EventDetails/>, 
                loader: () => fetch('/events.json')
            
            }, 
          
        ]
    }    
]);

export default router;