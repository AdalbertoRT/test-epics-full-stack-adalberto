import React from "react";
import { ContainerComponent } from "./style";

const Container = ({ children }) => {
    return (
        <ContainerComponent className="container d-flex flex-column flex-lg-row m-auto p-2 bg-white rounded">
            {children}
        </ContainerComponent>
    );
};

export default Container;
