import axios from "axios";
import useAuth from "../Hook/useAtuh";
import { useState } from "react";

const AddEmployeeCard = ({employee, refetch, reset}) => {
    const [check, setCheck] = useState(false)
    const {user} = useAuth()
    const { _id, name, email, user_photo } = employee || {};
    const handleAddTeam = async()=>{
        setCheck(true)
      const updateUser = {
        hr_email: user?.email,
        role: "Employee"
      }
      console.log("this is email", user?.email)
      const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/user/${email}`,updateUser)
      refetch()
      reset()
    }
    return (
            <div  className="flex items-center my-4 mx-4 rounded-md bg-purple-100 px-6 py-4 justify-between">
                <div className="flex items-center">
                <div><input type="checkbox" defaultChecked={check === true}  className="mr-4 checkbox w-4 h-4  rounded-sm checkbox-primary" /></div>
                <div className="w-12 mr-6 h-12">
                <img alt="" className="w-full h-full rounded-full  ring-offset-4 dark:bg-gray-500  dark:ring-offset-gray-100" src={user_photo} />
                </div>
                <p className="font-semibold">{name}</p>
                </div>
                <p onClick={handleAddTeam} className="px-3 py-1 font-semibold rounded-md dark:bg-purple-600 dark:text-gray-50 cursor-pointer">Add Team</p>
            </div>
    );
};

export default AddEmployeeCard;