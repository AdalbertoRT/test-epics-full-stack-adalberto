import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
