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
import EditProfile from "../pages/EditProfile";
import UpcomingEvents from "../components/UpcomingEvents";
import Chart from "../pages/Chart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://eventify-server-amber.vercel.app/events"),
            },
            {
                path: "events/:id",
                element: <EventDetails />,
                loader: ({ params }) =>
                    fetch(
                        `https://eventify-server-amber.vercel.app/events/${params.id}`
                    ),
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
            {
                path: "/upcoming",
                element: <UpcomingEvents></UpcomingEvents>,
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
                        <Chart></Chart>
                    </PrivateRoutes>
                ),
            },
            {
                path: "home",
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
                path: "profile/edit/:id",
                element: (
                    <PrivateRoutes>
                        <EditProfile />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://eventify-server-amber.vercel.app/user/get/${params.id}`
                    ),
            },
            {
                path: "all-events/edit/:id",
                element: (
                    <PrivateRoutes>
                        <EditEvents />
                    </PrivateRoutes>
                ),
                loader: ({ params }) =>
                    fetch(`https://eventify-server-amber.vercel.app/events/${params.id}`),
            },
        ],
    },
]);