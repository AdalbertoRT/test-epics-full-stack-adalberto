import React from "react";
import { MenuComponent, MenuItem } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <MenuComponent className="list-group d-none d-lg-block p-absolute p-lg-relative top-25 start-25">
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink
                    to="/dashboard"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <span className="col-auto">Dashboard</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink
                    to="/appointments"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faCalendarCheck} />
                    <span className="col-auto">Appointments</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center selected">
                <NavLink
                    to="/customers"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faUsers} />
                    <span className="col-auto">Customers</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink
                    to="/finances"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span className="col-auto">Finances</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink
                    to="/reports"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faSignal} />
                    <span className="col-auto">Reports</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink
                    to="/settings"
                    className="d-flex align-items-center gap-2 ps-2 ps-lg-4"
                >
                    <FontAwesomeIcon icon={faGear} />
                    <span className="col-auto">Settings</span>
                </NavLink>
            </MenuItem>
        </MenuComponent>
    );
};

export default Menu;
