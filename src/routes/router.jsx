import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AllEvents from "../pages/AllEvents";
import ErrorPage from "../pages/ErrorPage";
import EventDetails from "../pages/EventDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoutes from "./private/PrivateRoutes";
import EditEvents from "../pages/EditEvents";
import AddEvent from "../pages/AddEvent";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                // loader: () => fetch("http://localhost:3000/shoes"),
            },
            {
                path: "/products/:id",
                element: <EventDetails />,
                // loader: ({ params }) =>
                //     fetch(`http://localhost:3000/shoes/${params.id}`),
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Registration />,
            },
            {
                path: "/all-events",
                element: <AllEvents></AllEvents>,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashboardLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: (
                    <PrivateRoutes>
                        <Dashboard />
                    </PrivateRoutes>
                ),
            },
            {
                path: "all-events",
                element: (
                    <PrivateRoutes>
                        <AllEvents />
                    </PrivateRoutes>
                ),
            },
            {
                path: "add-events",
                element: (
                    <PrivateRoutes>
                        <AddEvent />
                    </PrivateRoutes>
                ),
            },
            {
                path: "all-events/edit/:id",
                element: (
                    <PrivateRoutes>
                        <EditEvents />
                    </PrivateRoutes>
                ),
                // loader: ({ params }) =>
                //     fetch(`http://localhost:3000/shoes/${params.id}`),
            },
        ],
    },
]);