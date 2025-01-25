import axios from "axios";
import useAuth from "../Hook/useAtuh";
import { axiosSecure } from "../Hook/useAxiosSecure";

const MyEmployeeRow = ({ employee, refetch, reset }) => {
  const { user } = useAuth();
  const { _id, name, email, user_photo, role } = employee || {};
  console.log(email);
  const handleAddTeam = async () => {
    const updateUser = {
      hr_email: "",
      role: "User",
    };

    const { data } = await axiosSecure.patch(
      `/removeteam/${email}`,
      updateUser
    );
    reset();
    refetch();

    console.error("Failed to remove team:");
  };

  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3">
        <p>97412378923</p>
      </td>
      <td className="p-3">
        <div className="mask mask-squircle h-12 w-12">
          <img src={user_photo} alt="Avatar Tailwind CSS Component" />
        </div>
      </td>
      <td className="p-3">
        <p>{name}</p>
      </td>
      <td className="p-3">
        <p>{role}</p>
      </td>
      <td className="p-3 text-right">
        <p>$15,792</p>
      </td>
      <td className="p-3 text-right">
        <button onClick={handleAddTeam} className="btn">
          Remove Team
        </button>
      </td>
    </tr>
  );
};

export default MyEmployeeRow;
