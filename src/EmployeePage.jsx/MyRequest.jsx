import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Request from "../HomeComponent/Request";
import { axiosSecure } from "../Hook/useAxiosSecure";

const MyRequest = () => {
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [type, setAssetType] = useState("");
  const [status, setStatus] = useState("")

  console.log(search, type, status, "this is html")
  const [loading, setLoading] = useState(true);
  const { data: requestData = [], refetch } = useQuery({
    queryKey: ["requestData",search, type, status],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/myrequest/${user?.email}?search=${search}&type=${type}&status=${status}`
      );
      setLoading(false);
      return data;
    },
  });
  console.log(requestData, "requested data");
  return (
    <div className="w-10/12 mx-auto my-7">
      <div className="mb-4 bg-white flex flex-col justify-between sm:flex-row p-4 shadow-md rounded-t-xl">
        <div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                title="Search"
                className="p-1 focus:outline-none focus:ring"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 dark:text-gray-800"
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
              className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50"
            />
          </div>
        </div>

        <div className="flex flex-row space-x-4">
          <select
            defaultValue={status}
            onChange={(e) => setStatus(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">status</option>
            <option value="Pending">pending</option>
            <option value="Approved">approved</option>
          </select>
          <select
            defaultValue={type}
            onChange={(e) => setAssetType(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
            <option value="">assets type</option>
            <option>Returnable</option>
            <option>Non-returnable</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {requestData?.map((request) => (
          <Request
            key={request._id}
            request={request}
            refetch={refetch}
          ></Request>
        ))}
      </div>
    </div>
  );
};

export default MyRequest;
