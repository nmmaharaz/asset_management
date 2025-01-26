import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EmployeeAssets from "./EmployeeComponent/EmployeeAssets";
import { axiosSecure } from "../Hook/useAxiosSecure";

const MyAssets = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);


  const { data: myAssistData, refetch: reset } = useQuery({
    queryKey: ["myAssistData"],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/allasset/${user?.email}`
      );
      setLoading(false);
      return data;
    },
  });
  console.log(myAssistData, "vai ami hr");

  return <div className="w-10/12 mt-12 mx-auto">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
    {
        myAssistData?.map(asset=><EmployeeAssets key={asset._id} reset={reset} asset={asset}></EmployeeAssets>)
    }
    </div>
    
  </div>;
};

export default MyAssets;
