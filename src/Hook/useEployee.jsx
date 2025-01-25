import axios from "axios";
import useAuth from "./useAtuh";
// import useHRAxiosSecure from "./useHRAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
// import Loading from "../Loading/Loading";

const useEmployee = () => {
  const axiosSecure = useAxiosSecure()
  const { loading, user } = useAuth();
  const { data: role , isLoading } = useQuery({
    queryKey: ["emrole", user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/employee/role/${user?.email}`
      );
      console.log("data data data", data);
      return data.role;
    },
  });

  // console.log(role, "this is role point")
  return [role, isLoading];
};

export default useEmployee;
