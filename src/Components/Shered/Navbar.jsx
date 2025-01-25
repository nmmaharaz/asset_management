import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAtuh";
import useEmployee from "../../Hook/useEployee";
import useHRRole from "../../Hook/useHRRole";
import "./Navbar.css"
import Loading from "../../Loading/Loading";

const Navbar = () => {
  const { user, loading, log0ut } = useAuth();
  const [role] = useEmployee();
  const hrRole = useHRRole();
  console.log(hrRole[0], "hellow");
  const handleLogout = () => {
    log0ut();
  };
  if(loading) return <Loading></Loading>
  return (
    <div>
      <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 32 32"
              className="w-8 h-8 dark:text-violet-600"
            >
              <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
              <path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path>
            </svg>
          </a>

          <ul className=" items-center hidden space-x-7 lg:flex">
            <NavLink to="/" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                Home
            </NavLink>

            {hrRole[0] || role ? (
              <>
                {role === "Employee" && (
                  <>
                    {" "}
                    <NavLink to="/myteam" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                        My Team
                    </NavLink>
                    <NavLink to="/myrequest" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                        Request For an Assets
                    </NavLink>
                    <NavLink to="/myassets" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                        My Assets
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR"  && (
                  <>
                    <NavLink to="/myemployeelist" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        My Employee List
                      
                    </NavLink>

                    <NavLink to="/assetlist" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Assets List
                      
                    </NavLink>
                    <NavLink to="/addasset" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Add an Assets
                      
                    </NavLink>
                    <NavLink to="/allrequest" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        All Requests
                      
                    </NavLink>
                    <NavLink to="/addemployee" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Add an Employee
                      
                    </NavLink>
                  </>
                )}
                {hrRole[0] === "HR_Request" && (
                  <>
                    <NavLink to="/myemployeelist" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        My Employee List
                      
                    </NavLink>

                    <NavLink to="/assetlist" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Assets List
                      
                    </NavLink>
                    <NavLink to="/addasset" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Add an Assets
                      
                    </NavLink>
                    <NavLink to="/allrequest" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        All Requests
                      
                    </NavLink>
                    <NavLink to="/addemployee" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                     
                        Add an Employee
                      
                    </NavLink>
                  </>
                )}
                {
                  role === "User" && <>
                  {" "}
                  <NavLink to="/joinasemployee" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                
                      Join as Employee
                    
                  </NavLink>
                  <NavLink to="/joinashrmanager" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                    
                      Join as Join as HR Manager
                    
                  </NavLink>
                </>
                }
              </>
            ) : 
              <>
                {" "}
                <NavLink to="/joinasemployee" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                 
                    Join as Employee
                  
                </NavLink>
                <NavLink to="/joinashrmanager" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }>
                  
                    Join as Join as HR Manager
                  
                </NavLink>
              </>
            }

            {/* {role === "Employee"  &&
              <>
                <NavLink to="/myteam" className={({ isActive }) =>
                        `hoovereffect ${
                          isActive ? "text-[#8750f7]" : "text-black"
                        }`
                      }               <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    My Team
                  
                </NavLink>
                <NavLink to="/myrequest" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Request For an Assets
                  
                </NavLink>
                <NavLink to="/myassets" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    My Assets
                  
                </NavLink>
              </>
            }
            {hrRole[0] =="HR" &&
              <>
                <NavLink to="/myemployeelist" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    My Employee List
                  
                </NavLink>

                <NavLink to="/assetlist" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Assets List
                  
                </NavLink>
                <NavLink to="/addasset" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Add an Assets
                  
                </NavLink>
                <NavLink to="/allrequest" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    All Requests
                  
                </NavLink>
                <NavLink to="/addemployee" className="hoovereffect">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hoovereffect items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Add an Employee
                  
                </NavLink>
              </>
             }
			 {
				hrRole ==="HR_Request" || role === "User" &&
				<>
                <NavLink className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                  >
                    Home
                  </a>
                </NavLink>
                <NavLink to="/joinasemployee" className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Join as Employee
                  </a>
                </NavLink>
                <NavLink to="/joinashrmanager" className="flex">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Join as Join as HR Manager
                  </a>
                </NavLink>
              </>
			 } */}
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <Link to="/login">
              <button className="self-center px-8 py-3 rounded">Login</button>
            </Link>
            <button
              onClick={handleLogout}
              className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"
            >
              LogOut
            </button>
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
              className="menu menu-sm justify-start flex flex-col dropdown-content bg-base-100 rounded-box z-[50] w-full right-4 pl-4 pr-40 shadow"
            >
              <li className="flex justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center justify-start px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                >
                  Link
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center justify-start px-4 -mb-1 border-b-2 dark:border-"
                >
                  Link
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center justify-start px-4 -mb-1 border-b-2 dark:border-"
                >
                  Link
                </a>
              </li>
              <li className="flex justify-start">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center justify-start px-4 -mb-1 border-b-2 dark:border-"
                >
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
