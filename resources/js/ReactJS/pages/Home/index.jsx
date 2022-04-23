import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import * as C from "../styles";
import { HomeCards, HomeList } from "./style";

import List from "../../components/List";
import HeaderList from "../../components/HeaderList";
import Cards from "../../components/Cards";
import UserLogged from "../../components/UserLogged";
import Aside from "../../components/Aside";
import Main from "../../components/Main";

const Home = () => {
    const { fetchCustomers, customers } = useContext(UserContext);

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <C.Container className="container d-flex flex-column flex-lg-row m-auto p-2 h-100 bg-white rounded">
            <Aside />
            <Main>
                <HomeCards className="mb-2">
                    <Cards />
                </HomeCards>
                <HomeList className="bg-white h-100 rounded p-2">
                    <HeaderList />
                    <List />
                </HomeList>
            </Main>
        </C.Container>
    );
};

export default Home;
