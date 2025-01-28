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
      {role === "Employee" ? (
        <>
          <div className="w-11/12 mx-auto my-7">
            <TeamTable myAssistData={myAssistData} reset={reset}></TeamTable>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-2xl font-semibold">
                You are not affilicated with any company
              </p>
              <p className="text-gray-600">
                please contact your HR depertment for assistance
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyTeam;
