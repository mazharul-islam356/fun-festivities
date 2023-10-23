import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/detail/Details";
import Error404 from "../error404";
import PrivetRoute from "./PrivetRoute";
import Messages from "../ExtraSection/Messages";
import Help from "../ExtraSection/Help";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch('/data.json')
                
            },
            {
                path:'/login',
                element: <Login></Login>
                
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/details/:id',
                element:<PrivetRoute><Details></Details></PrivetRoute>,
                loader:() => fetch('/data.json')
                
            },
            {
                path:'/message',
                element:<PrivetRoute><Messages></Messages></PrivetRoute>
            },
            {
                path:'/help',
                element:<PrivetRoute><Help></Help></PrivetRoute>
            }
           

        ]
    },
    {
        path:'*',
        element:<Error404></Error404>
    }
])
export default routes;