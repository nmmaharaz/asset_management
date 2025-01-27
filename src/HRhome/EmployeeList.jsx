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
      <div className="w-11/12 sm:w-4/12 mt-8 mx-auto p-2 bg-white border border-gray-200 rounded-md">
        <div className="flex justify-end">
          <Link
            to="/myemployeelist"
            className="cursor-pointer bg-blue-100 text-xs rounded-sm mb-2 px-3 py-1 block"
          >
            View All
          </Link>
        </div>
        {employeeList?.slice(0, 5).map((stock) => (
          <div
            className="flex justify-between items-center p-3 bg-[#F8F9FA] border border-dotted border-gray-300"
            key={stock._id}
          >
            <div>
              <p className="font-semibold">{stock?.product_name}</p>
              <p>{stock?.email}</p>
            </div>
            <div className="font-semibold">{stock?.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
