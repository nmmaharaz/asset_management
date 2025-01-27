import axios from "axios";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Team from "../HomeComponent/Team";
import Loading from "../Loading/Loading";
import TeamTable from "../HomeComponent/TeamTable";

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
    if(loading) return <Loading></Loading>
    return (
        <div className="w-11/12 mx-auto my-7">
            {/* <div className="grid gap-7 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3">
                {myAssistData?.map(team=><Team key={team._id} reset={reset} team={team}></Team>)}
            </div> */}
        <TeamTable myAssistData={myAssistData} reset={reset}></TeamTable>
       
        </div>
    );
};

export default MyTeam;