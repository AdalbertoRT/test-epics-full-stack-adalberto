import React, { useContext, useEffect, useState } from "react";
import ageCalc from "../../helpers/ageCalc";
import Loader from "./loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal";
import { Col, Row, Table, Th } from "./style";
import { UserContext } from "../../store/UserContext";
import { formatDateString } from "../../helpers/formatDate";

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

    if (data?.customers?.length < 1 || !data)
        return (
            <div className="w-100 d-flex align-items-center justify-content-center">
                <p className="m-3">No customers to show.</p>
            </div>
        );

    return (
        <section className="w-100 h-100 overflow-auto">
            <div className="table-responsive">
                <Table className="table table-hover">
                    <thead>
                        <Row className="p-0">
                            <Th scope="col">
                                <input type="checkbox" name="" id="" readOnly />
                            </Th>
                            <Th scope="col">Name</Th>
                            <Th scope="col">Last Visit</Th>
                            <Th scope="col">Age</Th>
                            <Th scope="col">Gender</Th>
                            <Th scope="col">Membership</Th>
                            <Th scope="col">LTV</Th>
                            <Th scope="col">Visits</Th>
                            <Th scope="col">Actions</Th>
                        </Row>
                    </thead>
                    <tbody>
                        {data && data.customers?.length > 0 ? (
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
                                            className="name d-flex gap-1 overflow-hidden userSelect"
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
                                                          "/images/" +
                                                          el.picture
                                                }
                                                className="rounded-circle p-0 m-0"
                                                width="25"
                                            />
                                            <span className="text-truncate">
                                                {el.name}
                                            </span>
                                        </div>
                                    </Col>
                                    <Col className="text-truncate">
                                        {el.last_visit
                                            ? formatDateString(
                                                  el.last_visit?.split(" ")[0],
                                                  "dd/mm/aa"
                                              )
                                            : ""}
                                    </Col>
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
                                    <Col>
                                        {Math.floor(Math.random() * 50 + 1)}
                                    </Col>
                                    <Col>
                                        <div className="d-flex gap-2 justify-content-evenly align-items-center p-0 h-100">
                                            <a
                                                type="button"
                                                href={"tel:" + el.phone_number}
                                                className="call btn btn-light btn-sm rounded py-0 px-1 text-secondary shadow-sm d-flex gap-1"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faPhone}
                                                    width="10"
                                                />{" "}
                                                <small>Call</small>
                                            </a>
                                            <button
                                                className="watch btn btn-light btn-sm rounded py-0 px-1 text-secondary shadow-sm d-flex gap-1"
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
                            ))
                        ) : (
                            <tr className="py-4">
                                <td colSpan={9} className="text-center">
                                    No customers to show.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Modal data={customer} />
            </div>
        </section>
    );
};

export default CustomersTable;
