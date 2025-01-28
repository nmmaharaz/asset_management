import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
const Error = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img className="max-h-[600px]" src={error} alt="" />
        <Link
          to="/"
          className="btn text-white font-semibold text-xl bg-[#a446f1]"
        >
          GO TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};

export default Error;
