import axios from "axios";
import { Modal } from "flowbite-react";
import useAuth from "../Hook/useAtuh";
import { format } from "date-fns";
import Swal from "sweetalert2";

const EmployeeRequest = ({ asset, reset, openModal, setOpenModal }) => {
  const { user } = useAuth();
  const { _id, product_name, product_type, product_quantity, added_date, hr_email } =
    asset || [];
  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    const additional_rule = e.target.additional_rule.value;
    const request_date  = new Date();
    // console.log(additional_rule, "This is eta");
    const assetRequest = {
      asset_id: _id,
      email: user?.email,
      name:user?.displayName,
      product_name,
      product_type,
      product_quantity,
      additional_rule,
      request_date,
      hr_email,
      approval_date: "",
      request_status: "Pending",
    };
    console.table(assetRequest)
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/asset_request`,
      assetRequest
    );
    Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Request Successfullye",
              showConfirmButton: false,
              timer: 1000,
            });
    setOpenModal(false)
  };
  return (
    <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
      <Modal.Header />
      <Modal.Body>
        <form
          onSubmit={handleSubmitRequest}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="text-left">
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="col-span-full mb-4 sm:col-span-3">
              <label htmlFor="address" className="text-sm pt-8 text-left">
                Additional Rule
              </label>
              <textarea
                name="additional_rule"
                className="textarea textarea-bordered w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
                placeholder="Additional rule"
              ></textarea>
            </div>
            <div className="flex justify-center form-control">
              <button className=" hover:bg-purple-700 border border-solid border-purple-400 text-[#8750f7] px-6 py-1 rounded-3xl shadow-lg hover:text-white font-semibold">
                Request
              </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EmployeeRequest;
