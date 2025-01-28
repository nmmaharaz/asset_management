import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import MyEmployeeRow from "../Shered/MyEmployeeRow";
import { axiosSecure } from "../Hook/useAxiosSecure";
import PackagePayment from "./PackagePayment";
import Loading from "../Loading/Loading";
import MyEmployeeTable from "../Shered/MyEmployeeTable";
import { Helmet } from "react-helmet";

const MyEmployee = () => {
    const {user, loading} = useAuth()
    const [loader, setLoading] = useState(true)
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
  
    const {data: Employee = [], isLoading, refetch} = useQuery({
        queryKey:['Employee'],
        queryFn:async()=>{
            const {data} = await axiosSecure(`/employee/${user?.email}`)
            setLoading(false)
          return data
        }
     })
     if(loading) return<Loading></Loading>
    return (
        <div className="w-11/12 mx-auto">
          <Helmet>
        <title>Safe Asset || My Employee</title>
      </Helmet>
         <div className="bg-white py-3 rounded-t-xl mb-4">
         <div className="px-11 flex flex-col sm:flex-row items-center justify-between">
        <div>
        <p className="text-xl sm:text-3xl font-bold">Employee limit: {HREmployee?.employee_limit}</p>
        <p className="text-base sm:text-xl mt-1">Total Employee: {HREmployee?.total_employee}</p>
        </div>
       </div>
         </div>
        {/* <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
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
        </div> */}
  <MyEmployeeTable Employee={Employee} reset={reset} refetch={refetch} ></MyEmployeeTable>

      </div>
    );
};

export default MyEmployee;