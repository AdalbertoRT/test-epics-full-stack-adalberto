import React, { useState } from "react";
import Brand from "../Brand";
import Menu from "../Menu";
import MenuMobile from "../Menu/menuMobile";
import UserLogged from "../UserLogged";

import { AsideComponent } from "./style";

const Aside = () => {
    const [show, setShow] = useState(false);
    return (
        <AsideComponent className="col-12 m-0 p-0 col-lg-2 h-lg-100 d-flex align-items-start justify-content-between flex-lg-column mb-1">
            <Brand className="brand" show={show} setShow={setShow} />

            <MenuMobile show={show} setShow={setShow} />
            <Menu />
            <div className="userLogged mt-0 mt-lg-auto pb-3">
                <UserLogged />
            </div>
        </AsideComponent>
    );
};

export default Aside;
