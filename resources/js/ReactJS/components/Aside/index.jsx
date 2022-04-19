import React from "react";
import Brand from "../Brand";
import Menu from "../Menu";
import UserLogged from "../UserLogged";
import { AsideComponent } from "./style";

const Aside = () => {
    return (
        <AsideComponent className="col-2 d-flex align-items-start flex-column bd-highlight mb-3">
            <Brand className="brand" />
            <Menu className="menu" />
            <div className="userLogged mt-auto p-2 bd-highlight">
                <UserLogged />
            </div>
        </AsideComponent>
    );
};

export default Aside;
