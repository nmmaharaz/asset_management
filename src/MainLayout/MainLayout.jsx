import { Outlet } from "react-router-dom";
import Footer from "../Components/Shered/Footer";
import Navbar from "../Components/Shered/Navbar";
import { ToastContainer } from "react-toastify";
import useEmployee from "../Hook/useEployee";
import useHRRole from "../Hook/useHRRole";


const MainLayout = () => {
    const [role] = useEmployee();
    const hrRole = useHRRole();
    return (
        <div className="bg-slate-100">
            <ToastContainer />
            {
                role === "Employee" || hrRole[0] === "HR"?"":<Navbar></Navbar>
            }
            <div className="min-h-screen">
                <Outlet>
                    
                </Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;