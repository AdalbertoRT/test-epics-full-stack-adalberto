import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/appointments" element={<Home />} />
                <Route path="/customers" element={<Home />} />
                <Route path="/finances" element={<Home />} />
                <Route path="/reports" element={<Home />} />
                <Route path="/settings" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
