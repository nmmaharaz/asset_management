import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Request from "../HomeComponent/Request";

const MyRequest = () => {
    const {user} = useAuth()
    const [loading, setLoading] = useState(true);
    const {
        data: requestData  = [],
        refetch,
      } = useQuery({
        queryKey: ["requestData"],
        queryFn: async () => {
          const { data } = await axios(
            `${import.meta.env.VITE_API_URL}/myrequest/${user?.email}`);
            setLoading(false);
            return data
        },
      });
    return (
        <div className="w-10/12 mx-auto my-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {
                requestData?.map(request=><Request key={request._id}  request={request} refetch={refetch}></Request>)
            }
        </div>
        </div>
    );
};

export default MyRequest;