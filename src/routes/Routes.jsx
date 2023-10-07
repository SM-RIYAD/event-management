import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import EventDetails from "../components/EventDetails";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog";
import Opinion from "../pages/opinion/Opinion";



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
                element: <PrivateRoute><EventDetails/></PrivateRoute> , 
                loader: () => fetch('/events.json')
            
            }, 

            {
                path: '/blog', 
                element: <PrivateRoute><Blog/></PrivateRoute>,
                
            },
            {
                path: '/opinion', 
                element: <PrivateRoute><Opinion/></PrivateRoute>,
                
            },
            {
                path: '/login',
                element: <Login/>, 
        
            
            }, 
            {
                path: '/register',
                element: <Register/>, 
        
            
            }, 
          
        ]
    }    
]);

export default router;