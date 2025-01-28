import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";
import { axiosSecure } from "../Hook/useAxiosSecure";
import MonthlyRequestRow from "./MonthlyRequestRow";
import { Link } from "react-router-dom";

const PendingRequest = () => {
    const { user, loading } = useAuth();
    const { data: topRequest = [] } = useQuery({
      queryKey: ["topRequest", user?.email],
      enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
      queryFn: async () => {
        const { data } = await axiosSecure(`/toppending/${user?.email}`);
        return data;
      },
    });
    console.log(topRequest, "this is top")
    return (
        <div>
        <div className="w-11/12 min-h-[600px] mt-4 lg:mt-0 mx-auto p-2 bg-white border border-gray-200 rounded-md">
          <div className="flex justify-end">
            <Link
              to="/myrequest"
              className="cursor-pointer bg-blue-100 text-xs rounded-sm px-3 py-1 block"
            >
              View All
            </Link>
          </div>
          <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              Pending Request
            </h2>
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
                    <th className="p-3">#</th>
                    <th className="p-3">Product Name</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Type</th>
                    <th className="text-center p-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {
                      topRequest?.slice(0,10).map((request, index)=> <MonthlyRequestRow key={request._id} index={index} request={request}></MonthlyRequestRow>) 
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default PendingRequest;