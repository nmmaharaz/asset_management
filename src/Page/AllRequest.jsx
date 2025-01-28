import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import AllRequestRow from "../Shered/AllRequestRow";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosSecure from "../Hook/useAxiosSecure";
import AllRequestTable from "../Shered/AllRequestTable";
import { Helmet } from "react-helmet";

const AllRequest = () => {
    const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure()
  const {
    data: allRequest,
    refetch: reset,
  } = useQuery({
    queryKey: ["allRequest", search],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/assetsrequest/${user?.email}?search=${search}`);
        setLoading(false);
        return data
    },
  });
  console.log(allRequest, "vai ami hr")
  return (
    <div>
      <Helmet>
        <title>Safe Asset || All Request</title>
      </Helmet>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
        <div className="mb-4 bg-white flex justify-center p-4 shadow-md rounded-t-xl">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1  focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className=" w-4 h-4 dark:text-gray-800"
                >
                  <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="Search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-32 border border-gray-200 py-3 pl-28 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-purple-100"
            />
          </div>
        </div>
          {/* <div className="overflow-x-auto rounded-md">
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
                  <th className="p-3 text-center">Invoice #</th>
                  <th className="p-3 text-center">Name</th>
                  <th className="p-3 text-center">Asset Type</th>
                  <th className="p-3 text-center">Employee Email</th>
                  <th className="p-3 text-center">Employee Name</th>
                  <th className="p-3 text-center">Addition Note</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Approve</th>
                  <th className="p-3 text-center">Reject</th>
                </tr>
              </thead>
              <tbody>
                {
                  allRequest?.map(request=><AllRequestRow key={request._id} reset={reset} request={request}></AllRequestRow>)
                }
              </tbody>
            </table>
          </div> */}
          <AllRequestTable reset={reset} allRequest={allRequest}></AllRequestTable>
        </div>
      </div>
  );
};

export default AllRequest;
