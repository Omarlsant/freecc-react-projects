import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            }
        ]
    }
]);