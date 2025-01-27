import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useAuth from "../Hook/useAtuh";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../Hook/useAxiosSecure";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const EmployeeAllStatus = () => {
    const { user, loading } = useAuth();
    const { data: EmployeeApprovedData = [] } = useQuery({
      queryKey: ["EmployeeApprovedData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/employeeapproveddata/${user?.email}`);
        return data;
      },
    });

    const { data: EmployeePendingData = [] } = useQuery({
        queryKey: ["EmployeePendingData", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure(`/employeependingdata/${user?.email}`);
          return data;
        },
      });

    const { data: EmployeeRejectedData = [] } = useQuery({
      queryKey: ["EmployeeRejectedData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/employeerejecteddata/${user?.email}`);
        return data;
      },
    });
  
    const { data: EmployeeReturnData = [] } = useQuery({
      queryKey: ["EmployeeReturnData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/employeereturndata/${user?.email}`);
        return data;
      },
    });
  
  const data = {
    labels: ["Approved", "Pending", "Rejected", "Returned"],
    datasets: [
      {
        label: "Status",
        data: [EmployeeApprovedData?.length, EmployeePendingData?.length, EmployeeRejectedData?.length, EmployeeReturnData?.length],
        backgroundColor: ["rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 1)","rgba(255, 99, 132, 1)","rgba(153, 102, 255, 1)"],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "All Status",
      },
    },
  };

  return <div className="w-11/12 lg:w-8/12 mt-8 mx-auto"><Bar data={data} options={options} /></div>;
};

export default EmployeeAllStatus;