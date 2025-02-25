import { toast } from "react-toastify";
import useAuth from "../Hook/useAtuh";

const Profile = () => {
    const {user, updateUserProfile} = useAuth()
    // console.log(user)
    const handleSubmitAsset = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        updateUserProfile(name)
        toast.success("Profile update successfully");
    }
  return (
    <div className="mt-20">
      <div className="flex bg-white flex-col px-6 py-20 mx-auto justify-center max-w-lg shadow-md rounded-xl">
        <img
          src={user?.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square"
        />
        <form
          onSubmit={handleSubmitAsset}
          noValidate=""
          action=""
          className="mx-auto space-y-12"
        >
          <fieldset className="rounded-md shadow-sm">
           
              <div className="">
                <label htmlFor="address" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600  focus:dark:ring-violet-600 border border-gray-300"
                />
              </div>
              <div className="">
                <label htmlFor="lastname" className="text-sm">
                  Email
                </label>
                <input
                  id="productquantity"
                  type="email"
                  name="product_quantity"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Product quantity"
                  className="w-full rounded-md bg-purple-50 py-1 px-3 focus:ring focus:ring-opacity-75 dark:text-purple-600 focus:dark:ring-violet-600 border border-gray-300"
                />
              </div>
              <div className="mt-4">
                <button className="hover:bg-purple-700 w-full border border-solid border-purple-400 text-[#8750f7] px-6 py-1 rounded-3xl shadow-lg hover:text-white font-semibold">
                  Update
                </button>
              </div>
            
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Profile;
