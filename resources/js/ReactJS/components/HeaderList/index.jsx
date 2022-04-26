import React, { useContext, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HeaderListContainer } from "./style";
import { UserContext } from "../../store/UserContext";

const HeaderList = () => {
    const { fetchCustomers, fetchCustomerByName, fetchCustomerByMembers } =
        useContext(UserContext);
    const [selectValue, setSelectValue] = useState("All Customers");

    const handleSearch = (e) => {
        if (e.target.value != "") fetchCustomerByName(e.target.value);
    };

    const handleSelect = (e) => {
        setSelectValue(e);
        if (e === "All Customers") fetchCustomers();
        else if (e === "All Members") fetchCustomerByMembers("yes");
        else fetchCustomerByMembers("no");
    };

    return (
        <HeaderListContainer className="row m-0 justify-content-between gap-2">
            <div className="me-1 me-md-3 col-2 col-md-2 fw-bold">
                {selectValue ? selectValue : "All Customers"}
            </div>
            <div className="col-8 col-md-5 row gap-1 m-0 p-0">
                <div className="col search d-flex border align-items-center rounded p-0 px-1">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />

                    <input
                        className="form-control form-control-sm small p-0 px-1 border-0"
                        type="search"
                        placeholder="Quick Search"
                        aria-label=".form-control-sm"
                        onKeyDown={(e) => handleSearch(e)}
                    />
                </div>
                <select
                    className="col form-select form-select-sm small p-0 px-1"
                    aria-label=".form-select-sm example"
                    value={selectValue}
                    onChange={(e) => handleSelect(e.target.value)}
                >
                    <option value="All Customers">All Customers</option>
                    <option value="All Members">All Members</option>
                    <option value="No Members">No Members</option>
                </select>
            </div>

            <div className="col-12 col-md-4 px-0 d-flex gap-3 justify-content-end text-secondary">
                <button
                    type="button"
                    className="export btn btn-sm btn-light rounded px-2 shadow-sm d-flex gap-1 align-items-center"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <span>Export</span>
                </button>
                <Link
                    to="/customers/add"
                    type="button"
                    className="new btn btn-sm btn-light rounded px-2 shadow-sm d-flex gap-1 align-items-center"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <span>New Customer</span>
                </Link>
            </div>
        </HeaderListContainer>
    );
};

export default HeaderList;
