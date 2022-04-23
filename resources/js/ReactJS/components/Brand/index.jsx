import React from "react";
import { Dropdown, Pipe } from "./style";

const Brand = () => {
    return (
        <Dropdown className="dropdown d-flex">
            <div className="pipes d-flex">
                <Pipe opacity={0.25} />
                <Pipe opacity={0.5} />
                <Pipe opacity={0.75} />
                <Pipe opacity={1} />
            </div>
            <div className="d-flex flex-column ms-1">
                <button
                    className="btn btn-link dropdown-toggle btn-sm d-flex align-items-center col-auto"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <h1>Studio 813</h1>
                </button>
                <span>YogaPlanner</span>
            </div>
        </Dropdown>
    );
};

export default Brand;
