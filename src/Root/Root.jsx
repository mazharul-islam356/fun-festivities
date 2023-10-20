import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto mb-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;