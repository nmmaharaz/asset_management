import { useState } from "react";
import useAuth from "../Hook/useAtuh";
import axios from "axios";
import { toast } from "react-toastify";
import { format } from "date-fns";

const AddAsset = () => {
  const { user } = useAuth();
  const [productType, setProductType] = useState("");
  console.log("this is product type", productType);
  const handleSubmitAsset = (e) => {
    e.preventDefault();
    const product_name = e.target.product_name.value;
    const product_type = productType
    const product_quantity = e.target.product_quantity.value;
    const date = new Date();
    const added_date = format(date, "dd/MM/yyyy");
    const assetData = {
      product_name,
      product_type,
      product_quantity,
      added_date,
      hr_email: user?.email,
    };
    axios.post(`${import.meta.env.VITE_API_URL}/asset`, assetData);
    toast.success("Employee account signup successfully");
  };
  return (
    <div>
      <section className="p-6 dark:text-gray-900">
        <form
          onSubmit={handleSubmitAsset}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-white">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Product Name
                </label>
                <input
                  id="product name"
                  name="product_name"
                  type="text"
                  placeholder="Product name"
                  className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Product Type
                </label>
                <select
                  required
                  defaultValue={status}
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
                  name="product_quantity"
                  placeholder="Product quantity"
                  className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600 focus:dark:ring-violet-600 border border-gray-300"
                />
              </div>
              <div className="col-span-full mx-auto">
                <button className="hover:bg-purple-700 w-full border border-solid border-purple-400 text-[#8750f7] px-6 py-1 rounded-3xl shadow-lg hover:text-white font-semibold">
                  Add Asset
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddAsset;
