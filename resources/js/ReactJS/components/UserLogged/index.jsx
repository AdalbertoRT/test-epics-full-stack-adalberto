import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "../../assets/img/default.jpg";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { LoggedComponent } from "./style";

const UserLogged = () => {
    return (
        <LoggedComponent>
            <div className="d-flex flex-column">
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

                <div>
                    <button className="btn btn-sm btn-outline-warning my-3">
                        <FontAwesomeIcon icon={faUserPen} /> Edit account
                    </button>
                </div>
            </div>
        </LoggedComponent>
    );
};

export default UserLogged;
