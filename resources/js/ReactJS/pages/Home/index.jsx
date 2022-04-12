import React, { useContext } from "react";
import { UserContext } from "../../store/UserContext";
import * as C from "./style";

import Menu from "../../components/Menu";
import Brand from "../../components/Brand";

const Home = () => {
    const customers = useContext(UserContext);

    return (
        <C.HomeContainer className="container m-auto p-2 bg-white rounded row">
            <C.HomeAside className="col-3">
                <Brand />
                <Menu />
            </C.HomeAside>
            <C.HomeMain className="col-9 rounded p-2">
                <C.HomeCards className="p-2">CARDS</C.HomeCards>
                <C.HomeList className="bg-white rounded p-2">LIST</C.HomeList>
            </C.HomeMain>
        </C.HomeContainer>
    );
};

export default Home;
