import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../Alert";
import {
    ModalBackground,
    ModalHeader,
    ModalHeaderButton,
    ModalPicture,
    ModalBody,
} from "./style";

const Modal = ({ data }) => {
    const [button, setButton] = useState("Overview");
    const [alert, setAlert] = useState(false);
    const host = window.location.origin;
    const order = Math.floor(Math.random() * 100 + 1).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
    const classes = Math.floor(Math.random() * 50 + 1);
    const modalRef = useRef();

    return (
        <>
            <ModalBackground
                className="modal fade"
                id="customerModal"
                tabIndex="-1"
                aria-hidden="true"
                ref={modalRef}
            >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable rounded modalEffect">
                    <div className="modal-content h-100">
                        <div className="modal-close w-100 d-flex justify-content-end mb-2">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <ModalHeader className="modal-header d-flex flex-wrap gap-2 justify-content-around">
                            <ModalHeaderButton
                                className={
                                    (button === "Overview"
                                        ? "active text-white"
                                        : "") +
                                    " btn btn-sm rounded p-0 px-1 bg-light"
                                }
                                onClick={(e) =>
                                    setButton(e.currentTarget.innerText)
                                }
                            >
                                Overview
                            </ModalHeaderButton>
                            <ModalHeaderButton
                                className={
                                    (button === "Appointments"
                                        ? "active text-white"
                                        : "") +
                                    " btn btn-sm rounded p-0 px-1 bg-light"
                                }
                                onClick={(e) =>
                                    setButton(e.currentTarget.innerText)
                                }
                            >
                                Appointments
                            </ModalHeaderButton>
                            <ModalHeaderButton
                                className={
                                    (button === "Visits"
                                        ? "active text-white"
                                        : "") +
                                    " btn btn-sm rounded p-0 px-1 bg-light"
                                }
                                onClick={(e) =>
                                    setButton(e.currentTarget.innerText)
                                }
                            >
                                Visits
                            </ModalHeaderButton>
                            <ModalHeaderButton
                                className={
                                    (button === "Transaction"
                                        ? "active text-white"
                                        : "") +
                                    " btn btn-sm rounded p-0 px-1 bg-light"
                                }
                                onClick={(e) =>
                                    setButton(e.currentTarget.innerText)
                                }
                            >
                                Transaction
                            </ModalHeaderButton>
                            <ModalHeaderButton
                                className={
                                    (button === "Membership"
                                        ? "active text-white"
                                        : "") +
                                    " btn btn-sm rounded p-0 px-1 bg-light"
                                }
                                onClick={(e) =>
                                    setButton(e.currentTarget.innerText)
                                }
                            >
                                Membership
                            </ModalHeaderButton>
                        </ModalHeader>
                        {data && (
                            <ModalBody className="modal-body gap-2 row">
                                <div className="picture col-3">
                                    <ModalPicture
                                        src={
                                            data.picture !== "default.jpg"
                                                ? host +
                                                  "/images/customers/" +
                                                  data.picture
                                                : host + "/images/default.jpg"
                                        }
                                        className="rounded"
                                    />
                                </div>
                                <div className="info col">
                                    <div>
                                        <strong className="d-flex flex-wrap text-wrap">
                                            {data.name}
                                        </strong>
                                        <small>
                                            Membership:{" "}
                                            <span className="badge bg-warning text-light align-items-center">
                                                {data.membership.toUpperCase()}
                                            </span>
                                        </small>
                                        <div className="d-flex gap-2 m-1">
                                            <small className="small">
                                                Active Now
                                            </small>
                                            <small className="small text-muted">
                                                Visited Today
                                            </small>
                                        </div>
                                        <div className="d-flex justify-content-between gap-3 m-1">
                                            <Link
                                                to={`/customers/refresh/${data.id}`}
                                                type="button"
                                                className="btn btn-sm bg-info text p-0 px-1 col"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                className="btn btn-sm bg-danger p-0 px-1 text-white col"
                                                onClick={() => setAlert(true)}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <table className="table">
                                            <thead>
                                                <tr className="p-0">
                                                    <th
                                                        scope="col"
                                                        className="text-secondary"
                                                    >
                                                        <small className="small">
                                                            Classes
                                                        </small>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-secondary"
                                                    >
                                                        <small className="small">
                                                            LTV
                                                        </small>
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-secondary"
                                                    >
                                                        <small className="small">
                                                            Average Order
                                                        </small>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>{classes}</td>
                                                    <td>
                                                        {data.ltv.toLocaleString(
                                                            "en-US",
                                                            {
                                                                style: "currency",
                                                                currency: "USD",
                                                            }
                                                        )}
                                                    </td>
                                                    <td>{order}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <hr />
                                    <div>
                                        <div>
                                            <small className="small text-secondary me-2">
                                                Requests
                                            </small>
                                            <button
                                                className="badge btn btn-sm p-0 px-1 text-sm text-white"
                                                style={{
                                                    backgroundColor: "tomato",
                                                }}
                                            >
                                                New
                                            </button>
                                        </div>
                                        <div
                                            className="rounded d-flex justify-content-between my-1"
                                            style={{
                                                backgroundColor: "#ffa50019",
                                            }}
                                        >
                                            <span style={{ color: "orange" }}>
                                                Yoga for beginners
                                            </span>
                                            <small>9:00 - FEB 6</small>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div>
                                            <small className="small text-secondary me-2">
                                                Next Appointments
                                            </small>
                                            <button
                                                className="badge btn btn-sm p-0 px-1 text-sm text-white"
                                                style={{
                                                    backgroundColor:
                                                        "mediumslateblue",
                                                }}
                                            >
                                                2
                                            </button>
                                        </div>
                                        <div
                                            className="w-100 rounded d-flex justify-content-between my-1"
                                            style={{
                                                backgroundColor: "#ff450019",
                                            }}
                                        >
                                            <span style={{ color: "orange" }}>
                                                Yoga for beginners
                                            </span>
                                            <small>9:00 - FEB 4</small>
                                        </div>
                                        <div
                                            className="w-100 rounded d-flex justify-content-between my-1"
                                            style={{
                                                backgroundColor: "#ff450019",
                                            }}
                                        >
                                            <span
                                                style={{ color: "orangered" }}
                                            >
                                                Meditation
                                            </span>
                                            <small>9:00 - FEB 5</small>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div className="d-flex justify-content-between">
                                            <small className="small text-secondary me-2">
                                                Notes
                                            </small>
                                            <button className="badge btn btn-sm p-0 px-1 text-sm bg-light text-secondary">
                                                &#65291; Add Note
                                            </button>
                                        </div>
                                        <div className="bg-light small p-1">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                        </div>
                                    </div>
                                </div>
                            </ModalBody>
                        )}
                    </div>
                </div>
            </ModalBackground>

            {alert && (
                <Alert
                    setAlert={setAlert}
                    customerId={data.id}
                    type="warning"
                    msg="Delete this client?"
                    modal={modalRef}
                />
            )}
        </>
    );
};

export default Modal;
