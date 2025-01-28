// import { toast } from "react-toastify";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../Hook/useAtuh";
import SignUpGoogle from "./SignUpGoogle";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
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
      <div className="w-full mx-auto my-7 max-w-md p-8 space-y-3 rounded-xl bg-purple-100 dark:text-gray-800">
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
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
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
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            {showPassword ? <FaEye onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 cursor-pointer top-[40%]" />:<FaEyeSlash onClick={()=>setShowPassword(!showPassword)}  className="absolute right-3 cursor-pointer top-[40%]" />}
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 dark:bg-violet-600">
            Sign In
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <SignUpGoogle></SignUpGoogle>
      </div>
    </div>
  );
};

export default Login;
