import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Hook/useAxiosSecure";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const { user } = useAuth();
  const { data: employeeList } = useQuery({
    queryKey: ["employeeList"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/hremployeelist/${user?.email}`);
      return data;
    },
  });
  return (
    <div>
      <div className="w-11/12 min-h-[600px] mt-8 mx-auto p-2 bg-white border border-gray-200 rounded-md">
       <div className="flex justify-between">
       <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Employee List
          </h2>
          <Link
            to="/myemployeelist"
            className="cursor-pointer bg-blue-100 text-xs rounded-sm mb-2 h-6 px-3 py-1 block"
          >
            View All
          </Link>
          </div>
        {employeeList?.slice(0, 10).map((stock) => (
          <div
            className="flex justify-between items-center p-3 bg-[#F8F9FA] border border-dotted border-gray-300"
            key={stock._id}
          >
            <div className="flex items-center">
              <img
                className="w-6 mr-4 h-6 rounded-full"
                src={stock?.user_photo}
                alt=""
              />
              <div className="text-sm font-semibold">{stock?.name}</div>
            </div>
            <div className="text-sm text-left">
              <p>{stock?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
