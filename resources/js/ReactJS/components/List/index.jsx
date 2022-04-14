import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Th } from "./style";
import ageCalc from "../../helpers/ageCalc";
import Modal from "../Modal";

const List = ({ data }) => {
    return (
        <table className="table table-hover">
            <thead>
                <Row className="p-0">
                    <Th scope="col">
                        <input type="checkbox" name="" id="" />
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
                {data.customers &&
                    data.customers.map((el) => (
                        <Row
                            key={el.id}
                            className="small align-items-center p-0"
                        >
                            <Col>
                                <input type="checkbox" name="" id="" />
                            </Col>
                            <Col>
                                <div
                                    className="row gap-1"
                                    data-bs-toggle="modal"
                                    data-bs-target="#customerModal"
                                >
                                    <img
                                        src={el.picture}
                                        className="rounded-circle p-0 m-0 col-1"
                                        width="25"
                                    />
                                    <span className="col text-wrap">
                                        {el.name}
                                    </span>
                                </div>
                            </Col>
                            <Col>{el.last_visit.split(" ")[0]}</Col>
                            <Col>{ageCalc(el.birthdate)}</Col>
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
                                <div className="d-flex justify-content-evenly align-items-center p-0 h-100">
                                    <a
                                        type="button"
                                        href={"tel:" + el.phone_number}
                                        className="btn btn-light btn-sm rounded py-0 px-1 text-secondary"
                                    >
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            width="10"
                                        />{" "}
                                        <small>Call</small>
                                    </a>
                                    <button className="btn btn-light btn-sm rounded py-0 px-1 text-secondary">
                                        <span className="fw-bold">
                                            &bull;&bull;
                                        </span>{" "}
                                        <small>Watch</small>
                                    </button>
                                    <button className="btn btn-light btn-sm rounded py-0 px-1 text-secondary">
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
            <Modal />
        </table>
    );
};

export default List;
