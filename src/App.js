import './App.css';
import React from "react";
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainSite from "./Pages/MainSite";
import Privacy from "./Pages/Privacy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainSite />,
    },
    {
        path: '/privacy',
        element: <Privacy />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}
export default App;
