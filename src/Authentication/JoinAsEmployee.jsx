import DatePicker from "react-date-picker";
import useAuth from "../Hook/useAtuh";
import { useState } from "react";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import { toast } from "react-toastify";
import SignUpGoogle from "./SignUpGoogle";
import { imageUpload, saveHRUser } from "../Imagebb/Imagebb";
import axios from "axios";

const JoinAsEmployee = () => {
  const { signUp, loading, updateUserProfile } = useAuth();
  const [value, onChange] = useState(new Date())
  const handleSubmitJoinEmployee = async(e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.fullname.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const dateofbirth =format(value, 'dd/MM/yyyy')
    const image = formData.photo.files[0]
    const user_photo = await imageUpload(image)
    // console.log(user_photo, "mama paichi")
    try{
      const employee = await signUp(email, password)
      .then(()=>{
        updateUserProfile(name, user_photo)
        console.log("this is image", user_photo)
        const employeeData = {
            name: name,
            user_photo,
            email: email,
            dateofbirth,
        }
        axios.post(`${import.meta.env.VITE_API_URL}/users/${email}`,employeeData)
        toast.success("Employee account signup successfully");
      })
      .catch((error)=>{
        toast.error("Already create this account!");
      })
    }catch(err){
      console.log(err)
    }
    
  };
  return (
    <div>
      <div className="w-full mx-auto my-7 max-w-md p-8 space-y-3 rounded-xl bg-purple-100 dark:text-gray-800">
        <h1 className="text-2xl font-bold text-center">Join as Employee</h1>
        <form
          onSubmit={handleSubmitJoinEmployee}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="fullname" className="block dark:text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="fullname"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
              <label htmlFor="fullname" className="block dark:text-gray-600">
                Upload Photo
              </label>
              <div className="flex">
                <input
                  type="file"
                  name="photo"
                  id="files"
                  className="px-8 w-full py-12 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
                />
              </div>
            </div>
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
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex justify-end text-xs dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="fullname" className="block dark:text-gray-600">
              Date of Birth
            </label>
            <div className="w-full">
              <DatePicker className="w-full outline-none border-none px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900" onChange={onChange} value={value} />
            </div>
          </div>
          <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">
            SignUp
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
        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?
          <a
            rel="noopener noreferrer"
            href="#"
            className="underline dark:text-gray-800"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default JoinAsEmployee;
