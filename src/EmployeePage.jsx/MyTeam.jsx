import axios from "axios";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Team from "../HomeComponent/Team";
import Loading from "../Loading/Loading";
import TeamTable from "../HomeComponent/TeamTable";
import { Helmet } from "react-helmet";
import useEmployee from "../Hook/useEployee";

const MyTeam = () => {
  const { user } = useAuth();
  const [role] = useEmployee();
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
  if (loading) return <Loading></Loading>;
  return (
    <div>
      <Helmet>
        <title>Safe Asset || My Team</title>
      </Helmet>
      {role === "Employee" && (
        <>
          <div className="mx-auto">
            <TeamTable myAssistData={myAssistData} reset={reset}></TeamTable>
          </div>
        </>
      )}
    </div>
  );
};

export default MyTeam;
