import { FileUser, ScrollText } from "lucide-react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Hook/useAxiosSecure";

const Stat = () => {
    const {user, loading} = useAuth()
    const email = user?.email
    const { data: totalRequest = [], refetch } = useQuery({
        queryKey: ["totalRequest", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/totalRequest/${user?.email}`
          );
          return data;
        },
      });
    const { data: totalApproved = [] } = useQuery({
        queryKey: ["totalApproved", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/totalapproved/${user?.email}`
          );
          return data;
        },
      });
    const { data: totalRejected = [] } = useQuery({
        queryKey: ["totalRejected", email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/totalrejected/${email}`
          );
          return data;
        },
      });
    const { data: totalReturned = [] } = useQuery({
        queryKey: ["totalReturned", email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
          const { data } = await axiosSecure(
            `/totalreturned/${email}`
          );
          return data;
        },
      });
    // console.log(totalReturned, "total req")

  return (
    <div>
      <section className="p-6 my-6">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2">
          <div className="flex bg-[#fff6f2] border shadow-md hover:shadow-purple-200 border-white p-4 space-x-4 rounded-lg md:space-x-6  text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#8142ee]">
            <FileUser className="text-white h-9 w-9" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{totalRequest?.length}</p>
              <p className="capitalize">Total Request</p>
            </div>
          </div>
          <div className="flex bg-[#fff6f2] border shadow-md hover:shadow-purple-200 border-white p-4 space-x-4 rounded-lg md:space-x-6  text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#8142ee]">
            <FileUser className="text-white h-9 w-9" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{totalApproved?.length}</p>
              <p className="capitalize">total Approved </p>
            </div>
          </div>
          <div className="flex bg-[#fff6f2] border shadow-md hover:shadow-purple-200 border-white p-4 space-x-4 rounded-lg md:space-x-6  text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#8142ee]">
            <FileUser className="text-white h-9 w-9" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{totalRejected?.length}</p>
              <p className="capitalize">total Rejected</p>
            </div>
          </div>
          <div className="flex bg-[#fff6f2] border shadow-md hover:shadow-purple-200 border-white p-4 space-x-4 rounded-lg md:space-x-6  text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-[#8142ee]">
            <FileUser className="text-white h-9 w-9" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">{totalReturned?.length}</p>
              <p className="capitalize">total Returned</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;
