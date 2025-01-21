import axios from "axios";
import useAuth from "./useAtuh";
// import useHRAxiosSecure from "./useHRAxiosSecure";
import { useQuery } from "@tanstack/react-query";
// import Loading from "../Loading/Loading";

const useHRRole = () => {
  // const hrAxiosSecure = useHRAxiosSecure();
  const { loading, user } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/hrusers/role/${user?.email}`
      );
      console.log("data data data", data);
      return data.role;
    },
  });
 
  return [role, isLoading];
};

export default useHRRole;
