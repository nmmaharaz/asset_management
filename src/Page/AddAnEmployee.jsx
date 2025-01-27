import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";
import Loading from "../Loading/Loading";
import AddEmployeeRow from "../Shered/AddEmployeeRow";
import axios from "axios";
import { useState } from "react";
import AddEmployeeCard from "../Shered/AddEmployeeCard";
import { axiosSecure } from "../Hook/useAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import HRReqest from "../Hook/HRRequest";
import AddEmployeeTable from "../Shered/AddEmployeeTable";
// import PackagePayment from "./PackagePayment";
// import AddEmployeeCard from "../Shered/AddEmployeeCard";
const AddAnEmployee = () => {
  // const hrAxiosSecure = useHRAxiosSecure();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const {
    data: HREmployee,
    refetch: reset,
  } = useQuery({
    queryKey: ["HREmployee"],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/hremployee/${user?.email}`);
        setLoading(false);
        return data
    },
  });
  console.log(HREmployee, "vai ami hr")

  const {
    data: AddEmployee = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AddEmployee"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/addemployee`
      );
      setLoading(false);
      return data;
    },
  });
  console.log("Add Enployee", AddEmployee);
  if (loading) return <Loading></Loading>;
  return (
    <div className="w-11/12 mt-2 mx-auto">
      <div className="bg-white py-4 rounded-md">
        <div className="px-11 flex flex-col sm:flex-row items-center justify-between">
        <div>
        <p className="text-xl sm:text-3xl font-bold">Employee limit: {HREmployee?.employee_limit}</p>
        <p className="text-base sm:text-xl mt-1 mb-2 lg:mb-7">Total Employee: {HREmployee?.total_employee}</p>
        </div>
        <div>
          <Link to="/package" className="btn mb-3 sm:mb-0 text-white btn-ghost bg-purple-600">Increse Limit</Link>
        </div>
        </div>
        {/* <p>{HREmployee?.length}</p>
        
        {
          HREmployee?.map(hr=><p key={hr._id}>{hr?.email}</p>)
        } */}
        {/* {AddEmployee?.map((employee) => (
          <AddEmployeeCard
            key={employee._id}
            refetch={refetch}
            employee={employee}
            reset={reset}
          ></AddEmployeeCard>
        ))} */}
    <AddEmployeeTable reset={reset} refetch={refetch} AddEmployee={AddEmployee}></AddEmployeeTable>
        
      </div>
    </div>
  );
};

export default AddAnEmployee;
