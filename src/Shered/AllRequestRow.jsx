import axios from "axios";
import { format } from "date-fns";

const AllRequestRow = ({ reset, request }) => {
  const {
    _id,
    product_name,
    name,
    email,
    product_type,
    request_date,
    request_status,
    additional_rule,
    approval_date,
  } = request || [];
  const handleApprove = async () => {
    const date = new Date();
    const approval_date = format(date, "dd/MM/yyyy");
    const updateData = {
      approval_date,
      request_status: "Approved",
    };
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/requestInfo/${_id}`,
      updateData
    );
    reset();
  };
  const handleReject = async () => {
    const updateData = {
      request_status: "Rejected",
    };
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/requestRejectInfo/${_id}`,
      updateData
    );
    reset();
  };
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3 text-center">
        <p>97412378923</p>
      </td>
      <td className="p-3 text-center">
        <p>{product_name}</p>
      </td>
      <td className="p-3 text-center">
        <p>{product_type}</p>
      </td>
      <td className="p-3 text-center">
        <p>{email}</p>
        <p className="dark:text-gray-600">Tuesday</p>
      </td>
      <td className="p-3 text-center">
        <p>{name}</p>
      </td>
      <td className="p-3 text-center">
        <p>{request_date}</p>
      </td>
      <td className="p-3 text-center">
        <p>{request_status}</p>
      </td>
      <td className="p-3 text-center">
        <p>{request_date}</p>
      </td>
      <td className="p-3 text-center">
        <button
          disabled={request_status == "Approved"}
          onClick={handleApprove}
          className="btn"
        >
          Approve
        </button>
      </td>
      <td className="p-3 text-right">
        <button onClick={handleReject} className="btn">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default AllRequestRow;
