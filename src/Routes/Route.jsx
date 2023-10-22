import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/detail/Details";
import Error404 from "../error404";

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
                element:<Details></Details>,
                loader:() => fetch('/data.json')
                
            },
           

        ]
    },
    {
        path:'*',
        element:<Error404></Error404>
    }
])
export default routes;