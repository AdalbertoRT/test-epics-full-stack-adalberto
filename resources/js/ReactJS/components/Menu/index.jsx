import React from "react";
import { MenuComponent, MenuItem } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { faUserPen } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <MenuComponent className="list-group">
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink to="/dashboard" className="row align-items-center">
                    <FontAwesomeIcon icon={faGaugeHigh} className="col-1" />
                    <span className="col-auto">Dashboard</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink to="/appointments" className="row align-items-center">
                    <FontAwesomeIcon icon={faCalendarCheck} className="col-1" />
                    <span className="col-auto">Appointments</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center selected">
                <NavLink to="/customers" className="row align-items-center">
                    <FontAwesomeIcon icon={faUsers} className="col-1" />
                    <span className="col-auto">Customers</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink to="/finances" className="row align-items-center">
                    <FontAwesomeIcon icon={faCreditCard} className="col-1" />
                    <span className="col-auto">Finances</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink to="/reports" className="row align-items-center">
                    <FontAwesomeIcon icon={faSignal} className="col-1" />
                    <span className="col-auto">Reports</span>
                </NavLink>
            </MenuItem>
            <MenuItem className="list-group-item my-1 border-0 bg-transparent row align-items-center">
                <NavLink to="/settings" className="row align-items-center">
                    <FontAwesomeIcon icon={faGear} className="col-1" />
                    <span className="col-auto">Settings</span>
                </NavLink>
            </MenuItem>
        </MenuComponent>
    );
};

export default Menu;
