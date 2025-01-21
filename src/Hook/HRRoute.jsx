import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useHRRole from "./useHRRole";
import useAuth from "./useAtuh";
// import Loading from "../Loading/Loading";
// import useAuth from "../Hook/useAtuh.js";
const HRRoute = ({children}) => {
  const {loading} = useAuth()
  const [role, isLoading] = useHRRole()
  if(loading) return 
  if(isLoading)return <Loading></Loading>
  if (role == 'HR') return children

  return <Navigate to="/JoinAsEmployee"></Navigate>
};

export default HRRoute;
