import React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="d-flex flex-column gap-4 rounded justify-content-center align-items-center w-100 h-100 bg-light">
            <h1>PAGE NOT FOUND!</h1>
            <h4>Error 404</h4>
            <div>
                <Link to="http://localhost">Return to Home</Link>
            </div>
        </div>
    );
};

export default NoMatch;
