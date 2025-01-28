import axios from "axios";
import { format, parse } from "date-fns";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
// import DatePicker from "react-date-picker";

const AssetEdit = ({ setOpenModal, openModal, reload, asset }) => {
  const { _id, product_name, product_type, product_quantity, added_date } =
    asset || [];

    const [startDate, setStartDate] = useState(added_date ? new Date(added_date) : new Date());
    const [productType, setProductType] = useState(product_type || "")

  const handleUpdate = async(e) => {
    e.preventDefault();
    const product_name = e.target.product_name.value;
    const product_type = productType;
    const product_quantity = e.target.product_quantity.value;
    const added_date = format(startDate, "dd/MM/yyyy");
    const assetData = {
      product_name,
      product_type,
      product_quantity,
      added_date,
    };
    console.log(assetData);
    const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/asset/${_id}`, assetData);
    toast.success("Asset edit successfully");
    reload()
    setOpenModal(false)
  };
  return (
    <Modal
      show={openModal}
      size="3xl"
      onClose={() => setOpenModal(false)}
      popup
    >
      <Modal.Header />
      <Modal.Body>
        <div className="text-left">
          <section className="p-6 dark:text-gray-900">
            <form
              onSubmit={handleUpdate}
              noValidate=""
              action=""
              className="container flex flex-col mx-auto space-y-12"
            >
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm border border-purple-100 dark:bg-white">
                <div className="grid grid-cols-6 gap-4 col-span-full ">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="address" className="text-sm text-left">
                      Product Name
                    </label>
                    <input
                      id="product name"
                      name="product_name"
                      defaultValue={product_name}
                      type="text"
                      placeholder="Product name"
                      className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
                    />
                  </div>
                  <div className="w-full col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Product Type
                    </label>
                    <DatePicker
                      className=" rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600 focus:dark:ring-violet-600 border border-gray-300"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Product Type
                    </label>
                    <select
                      required
                      defaultValue={product_type}
                      placeholder="select"
                      onChange={(e) => setProductType(e.target.value)}
                      className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600 font-semibold focus:dark:ring-violet-600 border border-gray-300"
                      name="category"
                    >
                      <option className="font-semibold " value="">
                        Select type
                      </option>
                      <option className="font-semibold " value="Returnable">
                        Returnable
                      </option>
                      <option className="font-semibold " value="Non-returnable">
                        Non-returnable
                      </option>
                    </select>
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Product Quantity
                    </label>
                    <input
                      id="productquantity"
                      type="number"
                      defaultValue={product_quantity}
                      name="product_quantity"
                      placeholder="Product quantity"
                      className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600 focus:dark:ring-violet-600 border border-gray-300"
                    />
                  </div>
                </div>
                <div className="col-span-full flex justify-center gap-4">
                  <div className="form-control">
                    <button className=" hover:bg-purple-700 w-full border border-solid border-purple-400 text-[#8750f7] px-6 py-1 rounded-3xl shadow-lg hover:text-white font-semibold">
                      Update
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => setOpenModal(false)}
                      className="hover:bg-[#ec3030] w-full border border-solid border-[#ec3030] text-[#ec3030] px-6 py-1 rounded-3xl shadow-lg hover:text-white font-semibold"
                    >
                      Cencel
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AssetEdit;
