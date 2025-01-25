import Banner from "../HomeComponent/Banner";
import Package from "../HomeComponent/Package";
import useAuth from "../Hook/useAtuh";
import useHRRole from "../Hook/useHRRole";
import Loading from "../Loading/Loading"
const Home = () => {
    const {user, loading} = useAuth()
    const hrRole = useHRRole();
    if(loading) return <Loading></Loading>
    return (
        <div>
            {user?.email}
            {user?.name}
            <Banner></Banner>
            {
               hrRole[0] === "HR_Request" && <Package></Package>
            }
        </div>
    );
};

export default Home;