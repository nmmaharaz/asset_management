import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

import { useState } from "react";
import DatePicker from "react-date-picker";
import useAuth from "../Hook/useAtuh";
import { format } from "date-fns";
import { toast } from "react-toastify";
import SignUpGoogle from "./SignUpGoogle";
import UploadImage from "./image/UploadImage";
import { imageUpload } from "../Imagebb/Imagebb";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const JoinAsHRManager = () => {
  const { signUp, googlesignin, updateUserProfile } = useAuth();
  const navigate = useNavigate();
   
  const plans = [
    { name: "5 Members for $5", value: 5 },
    { name: "10 Members for $8", value: 8 },
    { name: "20 Members for $15", value: 15 },
  ];
  const [selected, setSelected] = useState(plans[0]);
  console.log("vai tumi ki select korcho?", selected.value);
  const [value, onChange] = useState(new Date());
  const handleSubmitJoinHREmployee = async (e) => {
    e.preventDefault();
    const formData = e.target;
    const name = formData.fullname.value;
    const email = formData.email.value;
    const company_name = formData.company_name.value;
    const password = formData.password.value;
    const dateofbirth = format(value, "dd/MM/yyyy");
    const image = formData.photo.files[0];
    const user_photo = await imageUpload(image);
    const companylogo = formData.companylogo.files[0];
    const company_logo = await imageUpload(companylogo);
    console.log(company_logo, "this is company logo");
    signUp(email, password)
      .then((result) => {
        updateUserProfile(name, user_photo);
        console.log("this is image", user_photo);
        const employeeData = {
          name: name,
          user_photo,
          email: email,
          dateofbirth,
          company_name,
          company_logo,
          package: selected.value,
        };
        axios.post(
          `${import.meta.env.VITE_API_URL}/hrusers/${email}`,
          employeeData
        );
        toast.success("Employee account signup successfully");
        navigate("/payment");
      })
      .catch((error) => {
        toast.error("Already create this account!");
      });
  };
//   const handleGoogleSignUp = ()=>{
//     googlesignin()
//     .then(result=>{
//       navigate("/payment")
//     })
// }
  return (
    <div>
      <div>
        <div className="w-full mx-auto mt-7 max-w-md p-8 space-y-3 rounded-xl bg-purple-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Join as HR Manager</h1>
          <form
            onSubmit={handleSubmitJoinHREmployee}
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
                required
                placeholder="fullname"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="companyname" className="block dark:text-gray-600">
                Company Name
              </label>
              <input
                type="text"
                name="company_name"
                id="companyname"
                required
                placeholder="companyname"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="fullname" className="block dark:text-gray-600">
                Company Logo
              </label>
              <div className="flex">
                <input
                  type="file"
                  name="companylogo"
                  id="files"
                  required
                  className="px-8 w-full py-4 border-2 border-dashed rounded-md dark:border-gray-300 dark:text-gray-600 dark:bg-gray-100"
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
                required
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
                required
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
                <DatePicker
                  className="w-full outline-none border-none px-3 py-2 border rounded-md border-gray-300 focus:outline-lime-500 bg-gray-200 text-gray-900"
                  onChange={onChange}
                  value={value}
                />
              </div>
            </div>
            <UploadImage></UploadImage>
            {/* package list */}
            <div className="w-full ">
              <label
                htmlFor="fullname"
                className="block mb-2 dark:text-gray-600"
              >
                Package Details
              </label>
              <div className="mx-auto w-full max-w-md">
                <RadioGroup
                  by="name"
                  value={selected}
                  onChange={setSelected}
                  aria-label="Server size"
                  className="space-y-2"
                >
                  {plans.map((plan) => (
                    <Radio
                      key={plan.name}
                      value={plan}
                      className="group relative flex cursor-pointer rounded-lg py-4 px-5 text-gray-600 shadow-md transition focus:outline-none data-[focus]:outline-1 bg-[#f9fafb] data-[focus]:outline-white data-[checked]:bg-gray-300"
                    >
                      <div className="flex w-full items-center justify-between">
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-600">
                            {plan.name}
                          </p>
                        </div>
                        <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
                      </div>
                    </Radio>
                  ))}
                </RadioGroup>
              </div>
            </div>
            {/* package list */}
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
    </div>
  );
};

export default JoinAsHRManager;
