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
const Home = () => {
  const { user } = useAuth();
  const hrRole = useHRRole();
  
  // const [role] = useEmployee();
//   if(loading) return <Loading></Loading>
  return (
    <div>
      {user?.email}
      {user?.name}
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
    </div>
  );
};

export default Home;
