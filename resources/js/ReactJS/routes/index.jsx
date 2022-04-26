import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import NoMatch from "../pages/NoMatch";
import Refresh from "../pages/Refresh";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route path="dashboard" element={<Home />} />
                    <Route path="appointments" element={<Home />} />
                    <Route path="customers">
                        <Route path="edit/:id" element={<Edit />} />
                        <Route path="add" element={<Add />} />
                        <Route path="refresh/:id" element={<Refresh />} />
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="members" element={<Home />} />
                    <Route path="finances" element={<Home />} />
                    <Route path="reports" element={<Home />} />
                    <Route path="settings" element={<Home />} />
                    <Route path="nomatch" element={<NoMatch />} />
                    <Route index element={<Home />} />
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
