import useAuth from "./useAtuh";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import { axiosPublic } from "./useAxiosPublic";

const useHRRole = () => {
  // const axiosSecure = useAxiosSecure()
  const { loading, user } = useAuth();
  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosPublic(
        `/hrusers/role/${user?.email}`
      );
      return data.role;
    },
  });
 
  return [role, isLoading];
};

export default useHRRole;
