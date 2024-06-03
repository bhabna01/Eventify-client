import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import AllEvents from "../pages/AllEvents";
import ErrorPage from "../pages/ErrorPage";
import EventDetails from "../pages/EventDetails";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

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
    // {
    //     path: "dashboard",
    //     element: <DashboardLayout />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         {
    //             path: "",
    //             element: (
    //                 <PrivateRoutes>
    //                     <Dashboard />
    //                 </PrivateRoutes>
    //             ),
    //         },
    //         {
    //             path: "all-products",
    //             element: (
    //                 <PrivateRoutes>
    //                     <AllProducts />
    //                 </PrivateRoutes>
    //             ),
    //         },
    //         {
    //             path: "add-products",
    //             element: (
    //                 <PrivateRoutes>
    //                     <AddProducts />
    //                 </PrivateRoutes>
    //             ),
    //         },
    //         {
    //             path: "all-products/edit/:id",
    //             element: (
    //                 <PrivateRoutes>
    //                     <EditProducts />
    //                 </PrivateRoutes>
    //             ),
    //             loader: ({ params }) =>
    //                 fetch(`http://localhost:3000/shoes/${params.id}`),
    //         },
    //     ],
    // },
]);