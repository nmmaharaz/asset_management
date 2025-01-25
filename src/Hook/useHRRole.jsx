import axios from "axios";
import useAuth from "./useAtuh";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useHRRole = () => {
  // const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const { loading, user } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/hrusers/role/${user?.email}`
      );
      return data.role;
    },
  });
 
  return [role, isLoading];
};

export default useHRRole;
