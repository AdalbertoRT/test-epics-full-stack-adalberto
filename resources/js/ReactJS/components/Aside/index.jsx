import React, { useState } from "react";
import Brand from "../Brand";
import Menu from "../Menu";
import UserLogged from "../UserLogged";

import { AsideComponent } from "./style";

const Aside = () => {
    return (
        <AsideComponent className="col-12 m-0 p-0 col-lg-2 h-lg-100 d-flex align-items-start justify-content-between flex-lg-column mb-3">
            <Brand className="brand" />
            <Menu />
            <div className="userLogged mt-0 mt-lg-auto pb-3">
                <UserLogged />
            </div>
        </AsideComponent>
    );
};

export default Aside;
