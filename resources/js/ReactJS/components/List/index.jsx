import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const List = ({ data }) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">
                        <input type="checkbox" name="" id="" />
                    </th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Vsit</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Membership</th>
                    <th scope="col">LTV</th>
                    <th scope="col">Visits</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.customers &&
                    data.customers.map((el) => (
                        <tr class="small align-items-center p-1">
                            <th scope="row">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <td>
                                <img
                                    src={el.picture}
                                    className="rounded-circle p-0 m-0"
                                    width="25"
                                />
                                <span>{el.name}</span>
                            </td>
                            <td>{el.last_visit.split(" ")[0]}</td>
                            <td>Age</td>
                            <td>{el.gender}</td>
                            <td>{el.membership}</td>
                            <td>{el.ltv}</td>
                            <td>Visits</td>
                            <td className="actions d-flex align-items-center justify-content-evenly gap-1">
                                <button className="btn btn-light btn-sm d-flex align-items-center justify-content-center rounded">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        width="10"
                                    />
                                    <small className="">Call</small>
                                </button>
                                <button className="btn btn-light btn-sm d-flex align-items-center justify-content-center rounded">
                                    <span className="fw-bold">
                                        &bull;&bull;
                                    </span>
                                    <small className="">Watch</small>
                                </button>
                                <button className="btn btn-light btn-sm d-flex align-items-center justify-content-center rounded">
                                    <FontAwesomeIcon
                                        icon={faEllipsis}
                                        width="10"
                                    />
                                </button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
};

export default List;
