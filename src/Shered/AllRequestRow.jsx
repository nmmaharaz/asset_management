import axios from "axios";

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
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/requestInfo/${_id}`
    );
    reset()
  };
  return (
    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
      <td className="p-3">
        <p>97412378923</p>
      </td>
      <td className="p-3">
        <p>{product_name}</p>
      </td>
      <td className="p-3">
        <p>{product_type}</p>
      </td>
      <td className="p-3">
        <p>{email}</p>
        <p className="dark:text-gray-600">Tuesday</p>
      </td>
      <td className="p-3 text-right">
        <p>{name}</p>
      </td>
      <td className="p-3 text-right">
        <p>{request_date}</p>
      </td>
      <td className="p-3 text-right">
        <p>{additional_rule}</p>
      </td>
      <td className="p-3 text-right">
        <p>{request_date}</p>
      </td>
      <td className="p-3 text-right">
        <button onClick={handleApprove} className="btn">
          Approve
        </button>
      </td>
      <td className="p-3 text-right">
        <button className="btn">Reject</button>
      </td>
    </tr>
  );
};

export default AllRequestRow;
