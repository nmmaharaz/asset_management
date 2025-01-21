import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import AllRequestRow from "../Shered/AllRequestRow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const AllRequest = () => {
    const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const {
    data: allRequest,
    refetch: reset,
  } = useQuery({
    queryKey: ["allRequest"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/assetsrequest/${user?.email}`);
        setLoading(false);
        return data
    },
  });
  console.log(allRequest, "vai ami hr")
  return (
    <div>
        <div className="text-purple-800 text-5xl font-bold">employee list</div>
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
                  allRequest?.map(request=><AllRequestRow key={request._id} reset={reset} request={request}></AllRequestRow>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default AllRequest;
