import TopRequest from "../HRhome/TopRequest";
import EmployeeAllStatus from "./EmployeeAllStatus";
import MonthlyRequest from "./MonthlyRequest";
import PendingRequest from "./PendingRequest";

const EmployeeHome = () => {
    return (
        <div>
            <div className="lg:grid grid-cols-2 gap-1">
            <PendingRequest></PendingRequest>
            <MonthlyRequest></MonthlyRequest>
            </div>
            <EmployeeAllStatus></EmployeeAllStatus>
        </div>
    );
};

export default EmployeeHome;