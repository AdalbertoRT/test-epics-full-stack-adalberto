import React, { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { HeaderListContainer } from "./style";
import { UserContext } from "../../store/UserContext";

const HeaderList = () => {
    const { fetchCustomers, fetchCustomerByName, fetchCustomerByMembers } =
        useContext(UserContext);
    const [selectValue, setSelectValue] = useState("0");

    const handleSearch = (e) => {
        if (e.target.value != "") fetchCustomerByName(e.target.value);
    };

    const handleSelect = (e) => {
        setSelectValue(e);
        if (e === "0") fetchCustomers();
        else if (e === "1") fetchCustomerByMembers("yes");
        else fetchCustomerByMembers("no");
    };

    return (
        <HeaderListContainer className="row">
            <div className="col d-flex gap-1">
                <div className="me-3">All Customers</div>
                <div className="search d-flex border align-items-center rounded p-0 px-1">
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
                    className="form-select form-select-sm small p-0 px-1"
                    aria-label=".form-select-sm example"
                    value={selectValue}
                    onChange={(e) => handleSelect(e.target.value)}
                >
                    <option value="0">All Customers</option>
                    <option value="1">All Members</option>
                    <option value="2">No Members</option>
                </select>
            </div>
            <div className="col-3 d-flex gap-3 justify-content-end text-secondary">
                <button
                    type="button"
                    className="export btn btn-sm btn-light rounded p-0 px-1 shadow-sm d-flex gap-1 align-items-center"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <span className="col-auto">Export</span>
                </button>
                <button
                    type="button"
                    className="new btn btn-sm btn-light rounded p-0 px-1 shadow-sm d-flex gap-1 align-items-center"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <span className="col-auto">New Customer</span>
                </button>
            </div>
        </HeaderListContainer>
    );
};

export default HeaderList;
