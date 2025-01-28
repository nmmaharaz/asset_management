import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAtuh";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading"
import { Link } from "react-router-dom";
import TopRequestTable from "./TopRequestTable";
const TopRequest = () => {
    const {user, loading} = useAuth()
    const { data: topRequest = [] } = useQuery({
        queryKey: ["topRequest", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/toprequest/${user?.email}`
          );
          return data;
        },
      });
      const [topReq, setTopReq] = useState([])
      useEffect(()=>{
        if(topRequest[0]){
            const {products}= topRequest[0]
            setTopReq(products?.slice(0, 4))
        }
      },[topRequest])
      console.log(topReq, "vai")
      if(loading) return<Loading></Loading>
    return (
        <div className="w-11/12 mx-auto p-2 bg-white border border-gray-200 rounded-md">
        <div className="p-2 sm:p-4 flex justify-between">
       <h2 className="text-2xl font-semibold leading-tight">
            Top Request
          </h2>
          <Link
            to="/allrequest"
            className="cursor-pointer bg-blue-100 text-xs rounded-sm h-6 px-3 py-1 block"
          >
            View All
          </Link>
          </div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="dark:bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3 text-center w-32">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                    topReq?.slice(0, 10).map((request, index)=> <TopRequestTable key={request._id} index={index} request={request}></TopRequestTable>) 
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default TopRequest;