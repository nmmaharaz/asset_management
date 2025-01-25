import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import MyEmployeeRow from "../Shered/MyEmployeeRow";
import { axiosSecure } from "../Hook/useAxiosSecure";
import PackagePayment from "./PackagePayment";

const MyEmployee = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true)
    const {
      data: HREmployee,
      refetch: reset,
    } = useQuery({
      queryKey: ["HREmployee"],
      queryFn: async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/hremployee/${user?.email}`);
          setLoading(false);
          return data
      },
    });
    console.log(HREmployee, "vai ami hr")
  
    const {data: Employee = [], isLoading, refetch} = useQuery({
        queryKey:['Employee'],
        queryFn:async()=>{
            const {data} = await axiosSecure(`/employee/${user?.email}`)
            setLoading(false)
          return data
        }
     })
     console.log()
    return (
        <div>
          
        <PackagePayment></PackagePayment>

        <div className="text-purple-800 text-5xl font-bold">employee list</div>
        <p>Employee Limit: {HREmployee?.email}</p>
        <p>Employee Limit: {HREmployee?.employee_limit}</p>
        <p>Totol Team Member: {HREmployee?.total_employee}</p>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
          <div className="overflow-x-auto rounded-md">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-44" />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Invoice #</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Issued</th>
                  <th className="p-3">Due</th>
                  <th className="p-3 text-right">Amount</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  Employee?.map(employee=><MyEmployeeRow key={employee._id} refetch={refetch} reset={reset} employee={employee}></MyEmployeeRow>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyEmployee;