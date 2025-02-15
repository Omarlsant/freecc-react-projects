import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home.tsx";
import AccordionPage from "../pages/AccordionPage.tsx";
import RandomColorPage from "../pages/RandomColorPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "accordion",
                element: <AccordionPage />
            },
            {
                path: "random-color",
                element: <RandomColorPage />
            }
        ]
    }
]);