import { Outlet } from "react-router-dom";
import Footer from "../Components/Shered/Footer";
import Navbar from "../Components/Shered/Navbar";
import { ToastContainer } from "react-toastify";


const MainLayout = () => {
    return (
        <div className="bg-slate-100">
            <ToastContainer />
            <Navbar></Navbar>
            <div className="min-h-screen">
                <Outlet>
                    
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;