import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAtuh";
import useEmployee from "../../Hook/useEployee";
import useHRRole from "../../Hook/useHRRole";
import "./Navbar.css";
import Loading from "../../Loading/Loading";
import { LogIn } from "lucide-react";
import logo from "../../assets/safeasset.png"
import { axiosSecure } from "../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { axiosPublic } from "../../Hook/useAxiosPublic";

const Navbar = () => {
  const { user,  log0ut, loading } = useAuth();
  const [role] = useEmployee();
  const hrRole = useHRRole();
  const navigate = useNavigate()
  const handleLogout = () => {
    log0ut();
    navigate("/")
  };
  const { data: hrData = [], refetch } = useQuery({
    queryKey: ["hrData", user?.email],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/hrCompany/${user?.email}`
      );
      return data;
    },
  });



  const { data: userData = [],} = useQuery({
    queryKey: ["userData"],
    enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/employeeCompany/${user?.email}`
      );
      return data;
    },
  });

  if(loading) return<Loading></Loading>

  return (
    <div className="sticky z-50 top-0">
      <header className=" bg-gray-100 text-gray-800">
        <div className="container w-11/12 flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
              {
                (!user?.email || role == "User" || hrRole[0] === "HR_Request") && (<img className="h-12" src={logo} alt="" />)
              }
              {
                hrRole[0] === "HR" && <img className="h-12" src={hrData?.company_logo} alt="" />
              }
              {
                role === "Employee" && <img className="h-12" src={userData?.company_logo} alt="" />
              }
          </a>

          <ul className=" items-center hidden space-x-7 lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
              }
            >
              Home
            </NavLink>

            {hrRole[0] || role ? (
              <>
                {role === "Employee"  && (
                  <>
                    {" "}
                    <NavLink
                      to="/myteam"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Team
                    </NavLink>
                    <NavLink
                      to="/myrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Request Assets
                    </NavLink>
                    <NavLink
                      to="/myassets"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Assets
                    </NavLink>
                  </>
                )}
                {role === "User"  && (
                  <>
                    {" "}
                    <NavLink
                      to="/myteam"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Team
                    </NavLink>
                    <NavLink
                      to="/myrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Request Assets
                    </NavLink>
                    <NavLink
                      to="/myassets"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Assets
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR" && (
                  <>
                    <NavLink
                      to="/myemployeelist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Employee List
                    </NavLink>

                    <NavLink
                      to="/assetlist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Assets List
                    </NavLink>
                    <NavLink
                      to="/addasset"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Assets
                    </NavLink>
                    <NavLink
                      to="/allrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      All Requests
                    </NavLink>
                    <NavLink
                      to="/addemployee"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Employee
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR_Request" && (
                  <>
                    <NavLink
                      to="/myemployeelist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Employee List
                    </NavLink>

                    <NavLink
                      to="/assetlist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Assets List
                    </NavLink>
                    <NavLink
                      to="/addasset"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Assets
                    </NavLink>
                    <NavLink
                      to="/allrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      All Requests
                    </NavLink>
                    <NavLink
                      to="/addemployee"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Employee
                    </NavLink>
                  </>
                )}
                
              </>
            ) : (
              <>
                {" "}
                <NavLink
                  to="/joinasemployee"
                  className={({ isActive }) =>
                    `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
                  }
                >
                  Join as Employee
                </NavLink>
                <NavLink
                  to="/joinashrmanager"
                  className={({ isActive }) =>
                    `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
                  }
                >
                 Join as HR Manager
                </NavLink>
              </>
            )}
           {
            user?.email &&  <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
            }
          >
            Profile
          </NavLink>
           },
           <Link to="/deshboard">Deshboard</Link>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            {
              !user?.email ?  <Link to="/login">
              <button className="flex items-center self-center px-4 hover:shadow-md hover:shadow-purple-500 py-3 font-semibold rounded bg-violet-600 text-gray-50">
              <LogIn className="h-4" />
                Login
                </button>
            </Link>:<button
              onClick={handleLogout}
              className="flex items-center self-center px-4 hover:shadow-md hover:shadow-purple-500 py-3 font-semibold rounded bg-violet-600 text-gray-50"
            >
              <img className="h-6 w-6 mr-2 rounded-full" src={user?.photoURL} alt="" />
              LogOut
            </button>
            }
          </div>

          
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-lg gap-y-3  flex flex-col dropdown-content bg-base-100 rounded-box z-[50] right-4 pl-4 w-48 shadow"
            >
              <NavLink
              to="/"
              className={({ isActive }) =>
                `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
              }
            >
              Home
            </NavLink>

            {hrRole[0] || role ? (
              <>
                {role === "Employee"  && (
                  <>
                    {" "}
                    <NavLink
                      to="/myteam"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Team
                    </NavLink>
                    <NavLink
                      to="/myrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Request Assets
                    </NavLink>
                    <NavLink
                      to="/myassets"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Assets
                    </NavLink>
                  </>
                )}
                {role === "User"  && (
                  <>
                    {" "}
                    <NavLink
                      to="/myteam"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Team
                    </NavLink>
                    <NavLink
                      to="/myrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Request Assets
                    </NavLink>
                    <NavLink
                      to="/myassets"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Assets
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR" && (
                  <>
                    <NavLink
                      to="/myemployeelist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Employee List
                    </NavLink>

                    <NavLink
                      to="/assetlist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Assets List
                    </NavLink>
                    <NavLink
                      to="/addasset"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Assets
                    </NavLink>
                    <NavLink
                      to="/allrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      All Requests
                    </NavLink>
                    <NavLink
                      to="/addemployee"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Employee
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR_Request" && (
                  <>
                    <NavLink
                      to="/myemployeelist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      My Employee List
                    </NavLink>

                    <NavLink
                      to="/assetlist"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Assets List
                    </NavLink>
                    <NavLink
                      to="/addasset"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Assets
                    </NavLink>
                    <NavLink
                      to="/allrequest"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      All Requests
                    </NavLink>
                    <NavLink
                      to="/addemployee"
                      className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }
                    >
                      Add an Employee
                    </NavLink>
                  </>
                )}
                
              </>
            ) : (
              <>
                {" "}
                <NavLink
                  to="/joinasemployee"
                  className={({ isActive }) =>
                    `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
                  }
                >
                  Join as Employee
                </NavLink>
                <NavLink
                  to="/joinashrmanager"
                  className={({ isActive }) =>
                    `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
                  }
                >
                 Join as HR Manager
                </NavLink>
              </>
            )}
           {
            user?.email &&  <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hoovereffect ${isActive ? "text-[#8750f7]" : "text-black"}`
            }
          >
            Profile
          </NavLink>
           }
           {
              !user?.email ?  <Link to="/login">
              <button className="flex items-center self-center px-4 hover:shadow-md hover:shadow-purple-500 py-3 font-semibold rounded bg-violet-600 text-gray-50">
              <LogIn className="h-4" />
                Login
                </button>
            </Link>:<button
              onClick={handleLogout}
              className="flex items-center self-center px-4 hover:shadow-md hover:shadow-purple-500 py-3 font-semibold rounded bg-violet-600 text-gray-50"
            >
              <img className="h-6 w-6 mr-2 rounded-full" src={user?.photoURL} alt="" />
              LogOut
            </button>
            }
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
