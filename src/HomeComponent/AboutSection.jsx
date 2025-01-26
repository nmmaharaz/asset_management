import { FaCubes } from "react-icons/fa";
import { BiLaptop } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
const AboutSection = () => {
  return (
    <div className="bg-[#fef3ee] py-6 lg:py-16">
      <p className="text-2xl w-9/12 mx-auto sm:text-4xl text-center font-bold text-black">
      SmartHR Providing You Best Features
      </p>
      <p className="text-gray-500 mt-4 text-center w-10/12 mx-auto lg:w-7/12">Looking to automate HR management template? SmartHR is for you. This is a project management and HR automation template that can be used for the HRMS system.</p>
      <div className="w-11/12 mt-12 mx-auto flex items-center justify-between flex-col lg:flex-row ">
        <div className="lg:w-3/12 lg:mr-12 text-center lg:text-right">
         <div>
         <div className="flex justify-center lg:justify-end">
         <div className="w-20 h-20 bg-[#ffe5cd] flex justify-center items-center rounded-full">
            <FaCubes className=" text-[#ff9b44] text-5xl" />
          </div>
         </div>
          <p className="text-2xl font-bold mb-1">Advanced Features</p>
          <p className="text-gray-500 lg:pl-14">Advanced features tools like graphs, charts, invoices etc.</p>
         </div>
          <div className="mt-5">
          <div className="flex justify-center lg:justify-end">
          <div className="w-20 h-20 bg-[#FFC6CD] flex justify-center items-center rounded-full">
            <BiLaptop className=" text-[#fc6075] text-5xl" />
          </div>
          </div>
          <p className="text-2xl font-bold mb-1">More Flexible</p>
          <p className="text-gray-500 lg:pl-14">Advanced features tools like graphs, charts, invoices etc.</p>
          </div>
          
        </div>
        <div className="lg:w-4/12 mx-7 my-4 lg:my-0 lg:mx-0">
          <img className="w-full h-full" src="https://i.ibb.co.com/pXkrm15/feature.webp" alt="" />
        </div>
        <div className="lg:w-3/12 lg:ml-12 text-center lg:text-left">
         <div>
         <div className="flex justify-center lg:justify-start">
         <div className="w-20 h-20 bg-[#ffe5cd] flex justify-center items-center rounded-full">
            <IoMdEye className=" text-[#ff9b44] text-5xl" />
          </div>
         </div>
          <p className="text-2xl font-bold mb-1">Retina Ready</p>
          <p className="text-gray-500 lg:pr-14">Collaborate over projects with your team and clients optimised for mobile and tablet don't let slow page speeds drive.</p>
         </div>
          <div className="mt-5">
          <div className="flex justify-center lg:justify-start">
          <div className="w-20 h-20 bg-[#FFC6CD] flex justify-center items-center rounded-full">
            <MdManageAccounts className=" text-[#fc6075] text-5xl" />
          </div>
          </div>
          <p className="text-2xl font-bold mb-1">Employee Management</p>
          <p className="text-gray-500 lg:pr-14">Advanced features tools like graphs, charts, invoices etc.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
