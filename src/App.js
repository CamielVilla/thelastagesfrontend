import './App.css';
import React from "react";
import './App.css';
import {BrowserRouter, HashRouter, Route, Router, Routes} from 'react-router-dom';
import MainSite from "./Pages/MainSite";
import Privacy from "./Pages/Privacy";
import Navbar from "./Components/header/Navbar";


function App() {
    return (
        <HashRouter >
            {/*<Navbar />*/}
            <main>
                <Routes>
                    <Route path="/" element={<MainSite />} />
                    <Route path="/privacy" element={<Privacy />} />
                </Routes>
            </main>
        </HashRouter>
    );
}

export default App;
