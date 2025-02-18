import axios from "axios";
import EmployeeRequest from "./EmployeeRequest";
import { toast } from "react-toastify";
import { axiosSecure } from "../Hook/useAxiosSecure";
import Swal from "sweetalert2";
const Request = ({ request, refetch }) => {
  const {
    _id,
    asset_id,
    product_name,
    product_type,
    request_date,
    approval_date,
    request_status,
  } = request || [];
  const handleReturn = async () => {
    const updateData = {
      asset_id,
      request_status: "Returned",
    };
    try {
      const { data } = await axiosSecure.patch(
        `/request/${_id}`,
        updateData
      );
      // console.log(data, "o data")
      toast.success("Employee account signup successfully");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async()=>{
   await axiosSecure.delete(
      `/request/${_id}`);
      refetch();
      Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1000,
              });
  }
  return (
    <div className="flex shadow-md overflow-hidden rounded-lg dark:bg-gray-50 dark:text-gray-800">
      <div className="flex items-center justify-center px-4 bg-violet-600 text-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M487.938,162.108l-224-128a16,16,0,0,0-15.876,0l-224,128a16,16,0,0,0,.382,28l224,120a16,16,0,0,0,15.112,0l224-120a16,16,0,0,0,.382-28ZM256,277.849,65.039,175.548,256,66.428l190.961,109.12Z"></path>
          <path d="M263.711,394.02,480,275.061V238.539L256,361.74,32,238.539v36.522L248.289,394.02a16.005,16.005,0,0,0,15.422,0Z"></path>
          <path d="M32,362.667,248.471,478.118a16,16,0,0,0,15.058,0L480,362.667V326.4L256,445.867,32,326.4Z"></path>
        </svg>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between flex-1 p-3">
          <p className="text-2xl font-semibold">{product_name}</p>
          <p>{product_type}</p>
        </div>
        <div className="flex items-center justify-between px-3">
          <p className="text-xl font-semibold">{request_date}</p>
          <p className="text-xl font-semibold">{approval_date}</p>
        </div>
        <div className="flex items-center justify-between px-3">
          <button className="text-right btn bg-purple-500 text-white ml-5">
            {request_status}
          </button>
          {request_status == "Pending" ? (
            <button onClick={handleDelete} className="text-right btn bg-purple-500 text-white ml-5">
              Cencel
            </button>
          ) : (
            <button className="text-right btn bg-purple-500 text-white ml-5">
              Print
            </button>
          )}
          {(request_status == "Approved" || request_status == "Returned") &
          (product_type == "Returnable") ? (
            <button
              onClick={handleReturn}
              disabled={request_status == "Returned"}
              className="text-right btn bg-purple-500 text-white ml-5"
            >
              Return
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <EmployeeRequest reset={reset} request={request} setOpenModal={setOpenModal} openModal={openModal}></EmployeeRequest> */}
    </div>
  );
};

export default Request;
