import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Hook/useAxiosSecure";
import useAuth from "../Hook/useAtuh";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading"
const TopRequest = () => {
    const {user, loading} = useAuth()
    const { data: topRequest = [] } = useQuery({
        queryKey: ["topRequest", user?.email],
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
            setTopReq(products.slice(0, 4))
        }
      },[topRequest])
      console.log(topReq, "vai")
      if(loading) return<Loading></Loading>
    return (
        <div className="w-4/12 mx-auto bg-white border border-gray-200 rounded-md">
            {
                topReq?.map((req, index)=><div className="flex justify-between items-center p-3 bg-[#F8F9FA] border border-dotted border-gray-300 m-2" key={index}>
                    <div>
                        <p className="font-semibold">{req?.product_name}</p>
                        <p>{req?.hr_email}</p>
                    </div>
                    <div className="font-semibold">
                        {req?.totalQuantity}
                    </div>
                </div>)
            }
        </div>
    );
};

export default TopRequest;