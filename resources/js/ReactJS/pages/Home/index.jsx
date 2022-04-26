import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/UserContext";
import { HomeCards, HomeList } from "./style";

import List from "../../components/List";
import HeaderList from "../../components/HeaderList";
import Cards from "../../components/Cards";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import Container from "../../components/Container";

const Home = () => {
    const { fetchCustomers, customers } = useContext(UserContext);
    const [length, setLength] = useState(0);

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <Container>
            <Aside />
            <Main>
                <HomeCards className="mb-2">
                    <Cards />
                </HomeCards>
                <HomeList className="bg-white h-100 rounded p-2">
                    <HeaderList />
                    <div className="d-flex h-100 overflow-auto mt-2 mt-md-0">
                        <List />
                    </div>
                </HomeList>
            </Main>
        </Container>
    );
};

export default Home;
