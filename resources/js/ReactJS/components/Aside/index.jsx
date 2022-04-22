import React, { useState } from "react";
import Brand from "../Brand";
import Menu from "../Menu";
import UserLogged from "../UserLogged";
import { AsideComponent } from "./style";

const Aside = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <AsideComponent className="col-2 col-sm-12 d-flex align-items-start flex-lg-column bd-highlight mb-3">
            <Brand className="brand" />
            <div className="d-flex flex-column">
                <button
                    className="btn btn-sm btn-secondary"
                    type="button"
                    onClick={(e) => setShowMenu(!e)}
                >
                    Menu
                </button>

                {showMenu && <Menu className="menu " />}
            </div>
            <div className="userLogged mt-auto p-2 bd-highlight">
                <UserLogged />
            </div>
        </AsideComponent>
    );
};

export default Aside;
