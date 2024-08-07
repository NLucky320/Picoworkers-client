import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import AddTask from "../components/Dashboard/TaskCreator/AddTask";
import MyTasks from "../components/Dashboard/TaskCreator/MyTasks";
import PurchaseCoin from "../components/Dashboard/TaskCreator/PurchaseCoin";
import UpdateTask from "../components/Dashboard/TaskCreator/UpdateTask";
import PaymentHistory from "../components/Dashboard/TaskCreator/PaymentHistory";
import TaskCreatorHome from "../components/Dashboard/TaskCreator/TaskCreatorHome";
import PrivateRoute from "./PrivateRoute";
import TaskCreatorRoute from "./TaskCreatorRoute";
import AdminHome from "../components/Dashboard/Admin/AdminHome";
import AdminRoute from "./AdminRoute";
import ManageTasks from "../components/Dashboard/Admin/ManageTasks";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers";
import WorkerHome from "../components/Dashboard/Worker/WorkerHome";
import TaskList from "../components/Dashboard/Worker/TaskList";
import MySubmission from "../components/Dashboard/Worker/MySubmission";
import ViewDetails from "../components/Dashboard/components/ViewDetails";
import Withdraw from "../components/Dashboard/Worker/Withdraw";
import Payment from "../components/Payment/Payment";
import ForbiddenPage from "../Pages/ForbiddenPage/ForbiddenPage";
import WorkerRoute from "./WorkerRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      //admin menu
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminHome></AdminHome>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-tasks",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageTasks></ManageTasks>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "worker-home",
        element: <WorkerRoute>
          <PrivateRoute>
            <WorkerHome></WorkerHome>,
          </PrivateRoute>
        </WorkerRoute>
      },

      {
        path: "task-list",
        element: <WorkerRoute>
          <PrivateRoute>
             <TaskList></TaskList>,
          </PrivateRoute>
        </WorkerRoute>
      },
      {
        path: "my-submission",
          element: <WorkerRoute>
          <PrivateRoute>
           <MySubmission></MySubmission>
          </PrivateRoute>
        </WorkerRoute>
      },
    

      {
        path: "view-details/:id",
        element:  <WorkerRoute>
          <PrivateRoute>
         <ViewDetails></ViewDetails>
          </PrivateRoute>
        </WorkerRoute> ,
      },
      {
        path: "withdraw-coins",
        element:<WorkerRoute>
          <PrivateRoute>
       <Withdraw></Withdraw>
          </PrivateRoute>
        </WorkerRoute> ,
      },

      //taskCreator Menu
      {
        path: "task-creator-home",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <TaskCreatorHome></TaskCreatorHome>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "add-task",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <AddTask></AddTask>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "my-tasks",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <MyTasks></MyTasks>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "update-task/:id",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <UpdateTask></UpdateTask>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "purchase-coin",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <PurchaseCoin></PurchaseCoin>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment/:id",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <Payment></Payment>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <TaskCreatorRoute>
              <PaymentHistory></PaymentHistory>
            </TaskCreatorRoute>
          </PrivateRoute>
        ),
      },
       
      {
        path: "forbidden",
        element: <ForbiddenPage></ForbiddenPage>
      },

      
      {
        path: "*",
        element: <Navigate to="/dashboard/forbidden" replace />,
      },
    ],
  },
]);
