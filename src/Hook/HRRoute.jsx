import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useHRRole from "./useHRRole";
import useAuth from "./useAtuh";
// import Loading from "../Loading/Loading";
// import useAuth from "../Hook/useAtuh.js";
const HRRoute = ({children}) => {
  const {loading} = useAuth()
  const navigate = useNavigate()
  const [role, isLoading] = useHRRole()
  if(loading) return 
  if(isLoading)return <Loading></Loading>
  if (role == 'HR') return children
  if(role == 'HR_Request'){
    navigate("/payment")
    return
  }

  return <Navigate to="/JoinAsEmployee"></Navigate>
};

export default HRRoute;