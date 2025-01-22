import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAtuh";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { log0ut } = useAuth();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(function(response){
    return response
  },async(error)=>{
    const status = error.response.status
    if(status == 401 || status == 403){
        await log0ut()
        navigate('/signIn')
    }
    return Promise.reject(error)
  })

  return axiosSecure;
};

export default useAxiosSecure;
