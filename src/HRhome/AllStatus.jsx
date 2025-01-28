import React from "react";
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

// Register required chart components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const AllStatus = () => {
    const { user, loading } = useAuth();
    const { data: ApprovedData = [] } = useQuery({
      queryKey: ["ApprovedData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/approveddata/${user?.email}`);
        return data;
      },
    });

    const { data: PendingData = [] } = useQuery({
        queryKey: ["PendingData", user?.email],
        queryFn: async () => {
          const { data } = await axiosSecure(`/pendingdata/${user?.email}`);
          return data;
        },
      });

    const { data: RejectedData = [] } = useQuery({
      queryKey: ["RejectedData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/rejecteddata/${user?.email}`);
        return data;
      },
    });
  
    const { data: ReturnData = [] } = useQuery({
      queryKey: ["ReturnData", user?.email],
      queryFn: async () => {
        const { data } = await axiosSecure(`/returndata/${user?.email}`);
        return data;
      },
    });
  
  const data = {
    labels: ["Approved", "Pending", "Rejected", "Returned"],
    datasets: [
      {
        label: "Status",
        data: [ApprovedData?.length, PendingData?.length, RejectedData?.length, ReturnData?.length],
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
        text: "Monthly Sales Data",
      },
    },
  };

  return <div className="mt-4 lg:mt-0 flex-1 mx-auto"><Bar data={data} options={options} /></div>;
};

export default AllStatus;