import TopRequest from "../HRhome/TopRequest";
import MonthlyRequest from "./MonthlyRequest";
import PendingRequest from "./PendingRequest";

const EmployeeHome = () => {
    return (
        <div>
            EmployeeHome
            <div className="lg:grid grid-cols-2 gap-1">
            <PendingRequest></PendingRequest>
            <MonthlyRequest></MonthlyRequest>
            </div>
            {/* <TopRequest></TopRequest> */}
        </div>
    );
};

export default EmployeeHome;