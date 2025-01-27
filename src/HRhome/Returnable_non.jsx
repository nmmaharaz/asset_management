import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { axiosSecure } from "../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hook/useAtuh";

ChartJS.register(ArcElement, Tooltip, Legend);

const Returnable_non = () => {
  const { user, loading } = useAuth();
  const { data: Returnable = [] } = useQuery({
    queryKey: ["Returnable", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/return/${user?.email}`);
      return data;
    },
  });
  const { data: NonReturnable = [] } = useQuery({
    queryKey: ["NonReturnable", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/nonreturn/${user?.email}`);
      return data;
    },
  });


  const data = {
    labels: ["Returnable", "Non_Returnable"],
    datasets: [
      {
        label: "Votes",
        data: [Returnable?.length, NonReturnable?.length,],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
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
        text: "Distribution of Votes",
      },
    },
  };

  return <div className="sm:w-[400px]"><Pie data={data} options={options} /></div>;
};

export default Returnable_non;
