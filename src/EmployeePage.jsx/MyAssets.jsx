import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import EmployeeAssets from "./EmployeeComponent/EmployeeAssets";

const MyAssets = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const { data: myAssistData, refetch: reset } = useQuery({
    queryKey: ["myAssistData"],
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/allasset/${user?.email}`
      );
      setLoading(false);
      return data;
    },
  });
  console.log(myAssistData, "vai ami hr");

  return <div>
    {
        myAssistData?.map(asset=><EmployeeAssets key={asset._id} asset={asset}></EmployeeAssets>)
    }
  </div>;
};

export default MyAssets;
