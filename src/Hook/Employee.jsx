import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import useAuth from "./useAtuh";
import useEmployee from "./useEployee";
// import Loading from "../Loading/Loading";
// import useAuth from "../Hook/useAtuh.js";
const Employee = ({children}) => {
  const {loading} = useAuth()
  const [role, isLoading] = useEmployee()
  if(loading) return 
  if(isLoading)return <Loading></Loading>
  if (role == 'Employee') return children

  return <Navigate to="/JoinAsEmployee"></Navigate>
};

export default Employee;
