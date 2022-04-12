import React, { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import * as C from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGaugeHigh } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const customers = useContext(UserContext);

    return (
        <C.HomeContainer className="container m-auto p-2 bg-white rounded row">
            <C.HomeAside className="col-3">
                <C.HomeMenu className="list-group">
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faGaugeHigh} />
                    </li>
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                    </li>
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faUsers} />
                    </li>
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faCreditCard} />
                    </li>
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faSignal} />
                    </li>
                    <li className="list-group-item border-0">
                        <FontAwesomeIcon icon={faGear} />
                    </li>
                </C.HomeMenu>
            </C.HomeAside>
            <C.HomeMain className="col-9 rounded p-2">
                <C.HomeCards className="p-2">CARDS</C.HomeCards>
                <C.HomeList className="bg-white rounded p-2">LIST</C.HomeList>
            </C.HomeMain>
        </C.HomeContainer>
    );
};

export default Home;
