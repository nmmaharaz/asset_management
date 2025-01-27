import LiimitedStock from "./LiimitedStock";
import Returnable_non from "./Returnable_non";
import Stat from "./Stat";
import TopRequest from "./TopRequest";

const HRhome = () => {
  return (
    <div className="bg-[#f8f9fa]">
      <Stat></Stat>
      <TopRequest></TopRequest>
      <LiimitedStock></LiimitedStock>
      <Returnable_non></Returnable_non>
    </div>
  );
};

export default HRhome;
