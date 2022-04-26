import React from "react";
import { Link } from "react-router-dom";
import { NomatchComponent } from "./style";

const NoMatch = () => {
    return (
        <NomatchComponent className="container rounded p-2 bg-light">
            <div className="h-100 d-flex position-relative flex-column justify-content-between align-items-center gap-4 ">
                <h1 className="text-light justify-self-start">PAGE</h1>

                <Link
                    className="justify-self-end lead display-6 mt-auto fw-bolder"
                    to="/"
                >
                    Return to Home
                </Link>
            </div>
        </NomatchComponent>
    );
};

export default NoMatch;
