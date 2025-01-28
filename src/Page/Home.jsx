import { useState } from "react";
import About from "../HomeComponent/About";
import AboutSection from "../HomeComponent/AboutSection";
import Banner from "../HomeComponent/Banner";
import Package from "../HomeComponent/Package";
import Review from "../HomeComponent/Review";
import useAuth from "../Hook/useAtuh";
// import useEmployee from "../Hook/useEployee";
import useHRRole from "../Hook/useHRRole";
import Loading from "../Loading/Loading";
import HRhome from "../HRhome/HRhome";
import useEmployee from "../Hook/useEployee";
import EmployeeHome from "../EmployeeHome/EmployeeHome";
import { Helmet } from "react-helmet-async";
import UserHome from "../HomeComponent/UserHome";
const Home = () => {
  const { user, loading } = useAuth();
  const [role] = useEmployee();
  const hrRole = useHRRole();

  // const [role] = useEmployee();
  // if(loading) return <Loading></Loading>
  return (
    <div>
      <Helmet>
        <title>Safe Asset || Home</title>
      </Helmet>
      {hrRole[0] === "HR_Request" ||
        (!user?.email && (
          <>
            <Banner></Banner>
            <About></About>
            <Package></Package>
            <AboutSection></AboutSection>
            <Review></Review>
          </>
        ))}

      {hrRole[0] === "HR" && (
        <>
          <HRhome></HRhome>
        </>
      )}
      {role === "Employee" && <EmployeeHome></EmployeeHome>}
      {
        role == "User" && <UserHome></UserHome>
      }
    </div>
  );
};

export default Home;
