import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import * as C from "./style";

import Menu from "../../components/Menu";
import Brand from "../../components/Brand";
import List from "../../components/List";
import HeaderList from "../../components/HeaderList";
import Cards from "../../components/Cards";

const Home = () => {
    const { fetchCustomers, customers } = useContext(UserContext);

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <C.HomeContainer className="container d-flex m-auto p-2 bg-white rounded">
            <C.HomeAside className="flex-fill">
                <Brand />
                <Menu />
            </C.HomeAside>
            <C.HomeMain className="flex-fill rounded p-2">
                <C.HomeCards className="mb-2">
                    <Cards />
                </C.HomeCards>
                <C.HomeList className="bg-white rounded p-2">
                    <HeaderList />
                    {customers && <List />}
                </C.HomeList>
            </C.HomeMain>
        </C.HomeContainer>
    );
};

export default Home;
