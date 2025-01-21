import axios from "axios";

export const hrAxiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const useHRAxiosSecure = () => {
    return hrAxiosSecure
};

export default useHRAxiosSecure;