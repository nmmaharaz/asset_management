import {useNavigate } from "react-router-dom";
import { axiosSecure } from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAtuh";
import { CheckCircle, XCircle } from "lucide-react";

const Package = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handlePayment = async (money) => {
	// console.log(money, "this is money")
    const updatePackage = {
      package: money,
    };
    await axiosSecure.patch(`/hrUpdatePackage/${user?.email}`, updatePackage);
    navigate("/payment");
  };

  return (
   <div className="py-6 lg:py-16">
	<p className="text-2xl w-9/12 mx-auto sm:text-4xl text-center font-bold text-black">
      SmartHR Providing You Best Features
      </p>
      <p className="text-gray-500 mt-4 text-center w-10/12 mx-auto lg:w-7/12">Looking to automate HR management template? SmartHR is for you. This is a project management and HR automation template that can be used for the HRMS system.</p>
	 <div className="w-11/12 mt-12 mx-auto">
     <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
	 <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Basic
        </h2>
        <div className="flex flex-col items-center mt-4">
          <div className="relative flex items-center justify-center w-24 h-24 bg-orange-50 rounded-full">
            <span className="text-4xl font-bold text-orange-500">$5</span>
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-500">
		  Get Start
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 font-medium text-gray-700">Includes:</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Centralized employee database
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Up to 5 employees
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Suitable for businesses with up to 5 employees.
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button onClick={()=>handlePayment(5)} className="w-full px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600">
            Buy Now
          </button>
        </div>
      </div>
	  <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-center text-gray-800">
          Standard
        </h2>
        <div className="flex flex-col items-center mt-4">
          <div className="relative flex items-center justify-center w-24 h-24 bg-orange-50 rounded-full">
            <span className="text-4xl font-bold text-orange-500">$8</span>
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-500">
		  Get Start
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 font-medium text-gray-700">Includes:</h3>
          <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Centralized employee database
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Up to 5 employees
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Suitable for businesses with up to 5 employees.
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button onClick={()=>handlePayment(8)} className="w-full px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600">
            Buy Now
          </button>
        </div>
      </div>
	  <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
        <h2 className="text-xl font-bold text-center text-gray-800">
		Premium
        </h2>
        <div className="flex flex-col items-center mt-4">
          <div className="relative flex items-center justify-center w-24 h-24 bg-orange-50 rounded-full">
            <span className="text-4xl font-bold text-orange-500">$15</span>
          </div>
          <p className="mt-2 text-center text-sm font-medium text-gray-500">
            Get Start
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-3 font-medium text-gray-700">Includes:</h3>
		  <ul className="space-y-2">
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Centralized employee database
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Up to 20 employees
            </li>
            <li className="flex items-center text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />Suitable for businesses with up to 20 employees.
            </li>
          </ul>
        </div>
        <div className="mt-6 text-center">
          <button onClick={()=>handlePayment(15)} className="w-full px-6 py-3 font-semibold text-white bg-orange-500 rounded-lg shadow hover:bg-orange-600">
            Buy Now
          </button>
        </div>
      </div>
	 </div>
    </div>
   </div>
  );
};

export default Package;
