import AllStatus from "./AllStatus";
import EmployeeList from "./EmployeeList";
import HRPendingRequest from "./HRPendingRequest";
import LiimitedStock from "./LiimitedStock";
import Returnable_non from "./Returnable_non";
import Stat from "./Stat";
import TopRequest from "./TopRequest";

const HRhome = () => {
  return (
    <div className="bg-[#f8f9fa] ">
      <div className=" mx-auto">
      <div className="lg:grid lg:grid-cols-2">
      <Stat></Stat>
      <TopRequest></TopRequest>
      </div>
      <div className="lg:grid lg:grid-cols-3">
        <HRPendingRequest></HRPendingRequest>
      <LiimitedStock></LiimitedStock>
      <EmployeeList></EmployeeList>
      </div>
      
    
      <div className="sm:flex">
      <Returnable_non></Returnable_non>
      <AllStatus></AllStatus>
      </div>
      </div>
    </div>
  );
};

export default HRhome;
