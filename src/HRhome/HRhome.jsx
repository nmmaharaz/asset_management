import AllStatus from "./AllStatus";
import EmployeeList from "./EmployeeList";
import LiimitedStock from "./LiimitedStock";
import Returnable_non from "./Returnable_non";
import Stat from "./Stat";
import TopRequest from "./TopRequest";

const HRhome = () => {
  return (
    <div className="bg-[#f8f9fa] ">
      <div className="w-11/12 mx-auto">
      <Stat></Stat>
      <div className="sm:flex items-start">
      <TopRequest></TopRequest>
      <LiimitedStock></LiimitedStock>
      </div>
      
      <EmployeeList></EmployeeList>
    
      <div className="sm:flex">
      <Returnable_non></Returnable_non>
      <AllStatus></AllStatus>
      </div>
      </div>
    </div>
  );
};

export default HRhome;
