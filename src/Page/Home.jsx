import Package from "../HomeComponent/Package";
import useAuth from "../Hook/useAtuh";

const Home = () => {
    const {user} = useAuth()
    return (
        <div>
            {user?.email}
            {user?.name}
            home
            <Package></Package>
        </div>
    );
};

export default Home;