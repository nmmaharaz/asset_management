import axios from "axios";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyTeam = () => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
  
  
    const { data: myAssistData, refetch: reset } = useQuery({
      queryKey: ["myAssistData"],
      queryFn: async () => {
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/myteam/${user?.email}`
        );
        setLoading(false);
        return data;
      },
    });
    return (
        <div>
            Hellow my page 
        </div>
    );
};

export default MyTeam;