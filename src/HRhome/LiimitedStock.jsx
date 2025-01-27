import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";
import { axiosSecure } from "../Hook/useAxiosSecure";

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
        <div className="w-4/12 mt-8 mx-auto bg-white border border-gray-200 rounded-md">
        {
            limitedStock?.map((stock)=><div className="flex justify-between items-center p-3 bg-[#fff6f2] border border-dotted border-gray-300 m-2" key={stock._id}>
                <div>
                    <p className="font-semibold">{stock?.product_name}</p>
                    <p>{stock?.hr_email}</p>
                </div>
                <div className="font-semibold">
                    {stock?.product_quantity}
                </div>
            </div>)
        }
    </div>
    
)}

export default LiimitedStock;