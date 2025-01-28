import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";
import { axiosSecure } from "../Hook/useAxiosSecure";
import { Link } from "react-router-dom";
import LimitedStockRow from "./LimitedStockRow";

const LiimitedStock = () => {
    const {user, loading} = useAuth()
    const { data: limitedStock = [] } = useQuery({
        queryKey: ["limitedStock", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/limitedstock/${user?.email}`
          );
          return data;
        },
      });
    //   console.log("limited", limitedStock)
    return (
    <div className="w-11/12 mt-4 lg:mt-8 min-h-[400px] mx-auto p-2 bg-white border border-gray-200 rounded-md">
        <div className="flex justify-end">
          <Link
            to="/allrequest"
            className="cursor-pointer bg-blue-100 text-xs rounded-sm px-3 py-1 block"
          >
            View All
          </Link>
        </div>
        <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Limited Stock
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
                  <th className="p-3">Product Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3 w-32">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {
                    limitedStock?.slice(0, 5).map((limited, index)=> <LimitedStockRow key={limited._id} index={index} limited={limited}></LimitedStockRow>) 
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
)}

export default LiimitedStock;