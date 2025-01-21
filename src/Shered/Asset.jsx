import axios from "axios";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AssetEdit from "./AssetEdit";
// import useAuth from "../Hook/useAtuh";
const Asset = ({ asset, reload }) => {
  const [openModal, setOpenModal] = useState(false);

  // const {user} = useAuth()
  const { _id, product_name, product_type, product_quantity, added_date } =
    asset || [];

  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/allassets/${_id}`);
    reload()
  };

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
          <p>{product_quantity}</p>
        </div>
        <div className="flex items-center justify-between px-3">
          <p className="text-xl font-semibold">{product_type}</p>
          <p className="text-right ml-5">{added_date}</p>
        </div>
        <div className="flex justify-end gap-4 my-3 items-center">
          <div onClick={() => setOpenModal(true)} className="cursor-pointer">
            <FiEdit className="text-[#8750f7] text-xl " />
          </div>
          <div onClick={handleDelete} className="cursor-pointer">
            <RiDeleteBin6Line className="text-[#8750f7] text-xl " />
          </div>
        </div>
      </div>
      <AssetEdit reload={reload} asset={asset} setOpenModal={setOpenModal} openModal={openModal}></AssetEdit>
    </div>
  );
};

export default Asset;
