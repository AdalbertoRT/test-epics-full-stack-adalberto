import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../assets/img/default.jpg";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { LoggedComponent } from "./style";

const UserLogged = () => {
    return (
        <LoggedComponent>
            <div className="d-flex flex-row flex-lg-column align-items-center align-items-lg-start gap-2">
                <div className="d-flex">
                    <img
                        src={img}
                        alt="Admin"
                        width={30}
                        height={30}
                        className="rounded-circle"
                    />
                    <div className="d-flex flex-column flex-fill">
                        <span className="flex-fill">Adalberto R Teixeira</span>
                        <small className="text-muted flex-fill">Admin</small>
                    </div>
                </div>
                <div className="my-3 d-none d-lg-block">Today's classes</div>
                <div>
                    <button className="btn btn-sm btn-outline-warning p-1 d-flex align-items-center gap-1">
                        <FontAwesomeIcon icon={faUserPen} />{" "}
                        <span className="d-none d-lg-block">Edit account</span>
                    </button>
                </div>
            </div>
        </LoggedComponent>
    );
};

export default UserLogged;
