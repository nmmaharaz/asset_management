import { Outlet } from "react-router-dom";
import Footer from "../Components/Shered/Footer";
import Navbar from "../Components/Shered/Navbar";
import { ToastContainer } from "react-toastify";
import useEmployee from "../Hook/useEployee";
import useHRRole from "../Hook/useHRRole";
import Deshboard from "../Page/Deshboard";
import HRDeshboard from "../Page/HRDeshboard";
import useAuth from "../Hook/useAtuh";
import Loading from "../Loading/Loading";

const MainLayout = () => {
  const {loading} =  useAuth()
  const [role] = useEmployee();
  const hrRole = useHRRole();
  if(loading)return<Loading></Loading>
  return (
    <div className="bg-slate-100">
      <ToastContainer />
      {
                role === "Employee" || hrRole[0] === "HR"?"":<Navbar></Navbar>
            }
      {/* <Navbar></Navbar> */}
      <div className="min-h-screen">
        {role === "Employee" || hrRole[0] === "HR" ? (
          role === "Employee" ? <Deshboard></Deshboard>:<HRDeshboard></HRDeshboard>
        ) : (
            <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
