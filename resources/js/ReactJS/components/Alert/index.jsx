import React, { useContext, useState } from "react";
import { UserContext } from "../../store/UserContext";
import { AlertComponent } from "./style";

const Alert = ({ type, setAlert, msg, customerId = null, modal = null }) => {
    const { deleteCustomer, fetchCustomers } = useContext(UserContext);
    const host = window.location.origin;

    const handleDelete = async (e) => {
        e.target.disabled = true;
        e.target.innerText = "Excluding...";
        await deleteCustomer(customerId);
        modal ?? modal.current.classList.remove("show");
        setAlert(true);

        setTimeout(() => {
            window.location.href = host;
            setAlert(false);
        }, 2000);
        alert("Customer successfully deleted!");
    };

    return (
        <AlertComponent className="modal d-flex justify-content-center align-items-center">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className={`modal-header bg-${type} py-1`}>
                        <h5
                            className={`modal-title fw-bolder ${
                                type !== "warning" && "text-white"
                            }`}
                        >
                            {type?.toUpperCase()}!
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => setAlert(false)}
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p className="text-center fw-bold lead p-2">{msg}</p>
                    </div>
                    {type === "warning" && (
                        <div className="modal-footer justify-content-evenly py-0 ">
                            <button
                                type="button"
                                className="btn btn-secondary btn-lg px-3"
                                onClick={() => setAlert(false)}
                            >
                                No
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger btn-sm px-3"
                                onClick={(e) => handleDelete(e)}
                            >
                                Yes
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </AlertComponent>
    );
};

export default Alert;
