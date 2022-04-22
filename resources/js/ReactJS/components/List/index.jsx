import React, { useContext, useEffect, useState } from "react";
import ageCalc from "../../helpers/ageCalc";
import Loader from "./loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { Col, Row, Th } from "./style";
import { UserContext } from "../../store/UserContext";

const CustomersTable = () => {
    const { customers, loading } = useContext(UserContext);
    const [data, setData] = useState(null);
    const [customer, setCustomer] = useState(null);
    const host = window.location.origin;

    useEffect(() => {
        setData(customers);
    }, [customers]);

    if (loading)
        return (
            <div className="w-100 d-flex align-items-center justify-content-center">
                <Loader className="m-3 h" />
            </div>
        );

    if (data?.customers.length < 1)
        return (
            <div className="w-100 d-flex align-items-center justify-content-center">
                <p className="m-3">No customers to show.</p>
            </div>
        );

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <Row className="p-0">
                        <Th scope="col">
                            <input type="checkbox" name="" id="" readOnly />
                        </Th>
                        <Th scope="col">Name</Th>
                        <Th scope="col">Last Vsit</Th>
                        <Th scope="col">Age</Th>
                        <Th scope="col">Gender</Th>
                        <Th scope="col">Membership</Th>
                        <Th scope="col">LTV</Th>
                        <Th scope="col">Visits</Th>
                        <Th scope="col">Actions</Th>
                    </Row>
                </thead>
                <tbody>
                    {data &&
                        data.customers?.map((el) => (
                            <Row
                                key={el.id}
                                className="small align-items-center p-0"
                            >
                                <Col>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        readOnly
                                    />
                                </Col>
                                <Col>
                                    <div
                                        className="row gap-1 userSelect"
                                        onClick={() => setCustomer(el)}
                                        data-bs-toggle="modal"
                                        data-bs-target="#customerModal"
                                    >
                                        <img
                                            src={
                                                el.picture !== "default.jpg"
                                                    ? host +
                                                      "/images/customers/" +
                                                      el.picture
                                                    : host +
                                                      "/images/default.jpg"
                                            }
                                            className="rounded-circle p-0 m-0 col-1"
                                            width="25"
                                        />
                                        <span className="col text-wrap">
                                            {el.name}
                                        </span>
                                    </div>
                                </Col>
                                <Col>{el.last_visit?.split(" ")[0]}</Col>
                                <Col>
                                    {el.birthdate && ageCalc(el.birthdate)}
                                </Col>
                                <Col>{el.gender}</Col>
                                <Col>
                                    {el.membership == "no" ? (
                                        <span className="badge bg-danger text-light">
                                            No
                                        </span>
                                    ) : (
                                        <span className="badge bg-success text-light">
                                            Yes
                                        </span>
                                    )}
                                </Col>
                                <Col>
                                    {el.ltv.toLocaleString("en-US", {
                                        style: "currency",
                                        currency: "USD",
                                    })}
                                </Col>
                                <Col>{Math.floor(Math.random() * 50 + 1)}</Col>
                                <Col>
                                    <div className="d-flex gap-2 justify-content-evenly align-items-center p-0 h-100">
                                        <a
                                            type="button"
                                            href={"tel:" + el.phone_number}
                                            className="call btn btn-light btn-sm rounded py-0 px-1 text-secondary shadow-sm"
                                        >
                                            <FontAwesomeIcon
                                                icon={faPhone}
                                                width="10"
                                            />{" "}
                                            <small>Call</small>
                                        </a>
                                        <button
                                            className="watch btn btn-light btn-sm rounded py-0 px-1 text-secondary shadow-sm"
                                            onClick={() => setCustomer(el)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#customerModal"
                                        >
                                            <span className="fw-bold">
                                                &bull;&bull;
                                            </span>{" "}
                                            <small>Watch</small>
                                        </button>
                                        <button
                                            className="ellipsis btn btn-light btn-sm rounded py-0 px-1 text-secondary shadow-sm"
                                            onClick={() => setCustomer(el)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#customerModal"
                                        >
                                            <FontAwesomeIcon
                                                icon={faEllipsis}
                                                width="10"
                                            />
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                </tbody>
            </table>
            <Modal data={customer} />
        </>
    );
};

export default CustomersTable;
