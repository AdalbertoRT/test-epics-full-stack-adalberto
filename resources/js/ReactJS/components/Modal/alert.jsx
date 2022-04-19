import React, { useState } from "react";
import { Loader } from "../List/loader";
import { AlertComponent } from "./style";

const Alert = ({ setAlert, setLoad, customerId }) => {
    const deleteCustomer = async (e) => {
        e.target.disabled = true;
        e.target.innerText = "Excluding...";
        const host = window.location.origin;
        const port = window.location.port;
        const settings = {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        };
        try {
            const response = await fetch(
                `${host}:${port}/api/customers/delete/` + customerId,
                settings
            );
            const json = await response.json();

            setAlert(false);
            setLoad(true);
            window.location.href = host;
        } catch (e) {
            setAlert(false);
            window.location.href = host;
        }
    };

    return (
        <AlertComponent className="modal d-flex justify-content-center align-items-center">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header bg-warning">
                        <h5 className="modal-title">Warning!</h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setAlert(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>You want to delete this client?</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setAlert(false)}
                        >
                            No
                        </button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => deleteCustomer(e)}
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </AlertComponent>
    );
};

export default Alert;
