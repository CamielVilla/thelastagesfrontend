import './App.css';
import React from "react";
import './App.css';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import MainSite from "./Pages/MainSite";
import Privacy from "./Pages/Privacy";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route index element={<MainSite />}/>
            <Route path="privacy" element={<Privacy />}/>
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )

}
export default App;
