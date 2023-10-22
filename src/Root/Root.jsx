import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../fotter/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto mb-6">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>
        </div>
    );
};

export default Root;