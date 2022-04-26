import React, { useState } from "react";
import {
    MenuMobileComponent,
    MenuComponent,
    MenuItem,
    MenuMobileBack,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";
import Brand from "../Brand";

const MenuMobile = ({ show, setShow }) => {
    return (
        <MenuMobileBack
            className={`menuMobile d-block d-lg-none ${show && "show"}`}
        >
            <MenuMobileComponent className="p-3">
                <div className="d-flex justify-content-end">
                    <button
                        type="button"
                        className="btn-close p-absolute top-0 end-0"
                        onClick={() => setShow(!show)}
                    ></button>
                </div>

                <MenuComponent className="list-group">
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center">
                        <NavLink
                            to="/dashboard"
                            className="d-flex align-items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faGaugeHigh} />
                            <span className="col-auto">Dashboard</span>
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center">
                        <NavLink
                            to="/appointments"
                            className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                        >
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            <span className="col-auto">Appointments</span>
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center selected">
                        <NavLink
                            to="/customers"
                            className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                        >
                            <FontAwesomeIcon icon={faUsers} />
                            <span className="col-auto">Customers</span>
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center">
                        <NavLink
                            to="/finances"
                            className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                        >
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span className="col-auto">Finances</span>
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center">
                        <NavLink
                            to="/reports"
                            className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                        >
                            <FontAwesomeIcon icon={faSignal} />
                            <span className="col-auto">Reports</span>
                        </NavLink>
                    </MenuItem>
                    <MenuItem className="list-group-item my-1 border-0 row align-items-center">
                        <NavLink
                            to="/settings"
                            className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                        >
                            <FontAwesomeIcon icon={faGear} />
                            <span className="col-auto">Settings</span>
                        </NavLink>
                    </MenuItem>
                </MenuComponent>
            </MenuMobileComponent>
        </MenuMobileBack>
    );
};

export default MenuMobile;
