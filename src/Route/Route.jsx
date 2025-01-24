import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import JoinAsEmployee from "../Authentication/JoinAsEmployee";
import JoinAsHRManager from "../Authentication/JoinAsHRManager";
import Login from "../Authentication/Login";
import Home from "../Page/Home";
import HRRoute from "../Hook/HRRoute";
import AddAnEmployee from "../Page/AddAnEmployee";
import MyEmployee from "../Page/MyEmployee";
import AddAsset from "../Page/AddAsset";
import AssetList from "../Page/AssetList";
import Employee from "../Hook/Employee";
import MyAssets from "../EmployeePage.jsx/MyAssets";
import MyRequest from "../EmployeePage.jsx/MyRequest";
import MyTeam from "../EmployeePage.jsx/MyTeam";
import AllRequest from "../Page/allrequest";
import PackagePayment from "../Page/PackagePayment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/joinasemployee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/joinashrmanager",
        element: <JoinAsHRManager></JoinAsHRManager>,
      },
      {
        path: "/addemployee",
        element: (
          <HRRoute>
            <AddAnEmployee></AddAnEmployee>
          </HRRoute>
        ),
      },
      {
        path: "/allrequest",
        element: (
          <HRRoute>
            <AllRequest></AllRequest>
          </HRRoute>
        ),
      },
      {
        path: "/myemployeelist",
        element: (
          <HRRoute>
            <MyEmployee></MyEmployee>
          </HRRoute>
        ),
      },
      {
        path: "/addasset",
        element: (
          <HRRoute>
            <AddAsset></AddAsset>
          </HRRoute>
        ),
      },
      {
        path: "/assetlist",
        element: (
          <HRRoute>
            <AssetList></AssetList>
          </HRRoute>
        ),
      },
      {
        path: "/myassets",
        element: (
          <Employee>
            <MyAssets></MyAssets>
          </Employee>
        ),
      },
      {
        path: "/myrequest",
        element: (
          <Employee>
            <MyRequest></MyRequest>
          </Employee>
        ),
      },
      {
        path: "/myteam",
        element: (
          <Employee>
            <MyTeam></MyTeam>
          </Employee>
        ),
      },
      {
        path:"/payment",
        element:<PackagePayment></PackagePayment>
      }
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
