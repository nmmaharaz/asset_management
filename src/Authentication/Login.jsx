
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../Hook/useAtuh";
import SignUpGoogle from "./SignUpGoogle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loginimage from "../assets/Secure login-rafiki.png"
import useHRRole from "../Hook/useHRRole";
import useEmployee from "../Hook/useEployee";
import Deshboard from "../Page/Deshboard";

const Login = () => {
  const [role] = useEmployee();
  const hrRole = useHRRole();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = e.target;
    const email = formData.email.value;
    const password = formData.password.value;
    console.table(email, password);
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
        if(role === "Employee") <Deshboard></Deshboard>
        if(hrRole[0] === "HR")<Deshboard></Deshboard>
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Incurrect Password!");
      });
  };
  return (
    <div>
      <Helmet>
        <title>Safe Asset || Login</title>
      </Helmet>
      <ToastContainer />
      <div className="w-full mx-auto my-7  p-8 space-y-3 rounded-xl dark:text-gray-800">
       <div className="grid items-center grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex">
          <img src={loginimage} alt="" />
        </div>
        <div className="bg-white shadow-md shadow-purple-200 rounded-2xl p-5 mx-5 lg:mx-20">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form
          onSubmit={handleLogin}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-full rounded-md bg-purple-50 py-3 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <div className="relative">
            <input
              type={showPassword?'text':'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="w-full rounded-md bg-purple-50 py-3 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
            />
            {showPassword ? <FaEye onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer top-[40%]" />:<FaEyeSlash onClick={()=>setShowPassword(!showPassword)}  className="absolute right-3 cursor-pointer top-[40%]" />}
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-lg btn btn-outline btn-primary">
            Sign In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600 mb-4">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <SignUpGoogle></SignUpGoogle>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Login;
