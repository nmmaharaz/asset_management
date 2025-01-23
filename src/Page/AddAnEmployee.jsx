import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";
import Loading from "../Loading/Loading";
import AddEmployeeRow from "../Shered/AddEmployeeRow";
import axios from "axios";
import { useState } from "react";
import AddEmployeeCard from "../Shered/AddEmployeeCard";
import { axiosSecure } from "../Hook/useAxiosSecure";
import PackagePayment from "./PackagePayment";
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
    <div className="w-9/12 mx-auto">
      <div className="my-11">
      <PackagePayment></PackagePayment>
      </div>
      <div className="bg-white py-8 rounded-md">
        <div className="text-purple-800 text-5xl font-bold">
          Add an employee
        </div>
        <p>{HREmployee?.email}</p>
        <p>limit: {HREmployee?.employee_limit}</p>
        <p>limit: {HREmployee?.total_employee}</p>
        <p>{HREmployee?.email}</p>
        {/* <p>{HREmployee?.length}</p>
        
        {
          HREmployee?.map(hr=><p key={hr._id}>{hr?.email}</p>)
        } */}
        {AddEmployee?.map((employee) => (
          <AddEmployeeCard
            key={employee._id}
            refetch={refetch}
            employee={employee}
            reset={reset}
          ></AddEmployeeCard>
        ))}
      </div>
    </div>
  );
};

export default AddAnEmployee;
