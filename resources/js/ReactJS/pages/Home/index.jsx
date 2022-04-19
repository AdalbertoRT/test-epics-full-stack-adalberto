import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import * as C from "../styles";
import { HomeCards, HomeList } from "./style";

import Menu from "../../components/Menu";
import Brand from "../../components/Brand";
import List from "../../components/List";
import HeaderList from "../../components/HeaderList";
import Cards from "../../components/Cards";
import UserLogged from "../../components/UserLogged";
import Aside from "../../components/Aside";

const Home = () => {
    const { fetchCustomers, customers } = useContext(UserContext);

    useEffect(() => {
        if (!customers) fetchCustomers();
        console.log(customers);
    }, []);

    return (
        <C.Container className="container row m-auto p-2 bg-white rounded">
            <Aside />
            <C.Main className="col-10 rounded p-2">
                <HomeCards className="mb-2">
                    <Cards />
                </HomeCards>
                <HomeList className="bg-white h-100 rounded p-2">
                    <HeaderList />
                    <List />
                </HomeList>
            </C.Main>
        </C.Container>
    );
};

export default Home;
