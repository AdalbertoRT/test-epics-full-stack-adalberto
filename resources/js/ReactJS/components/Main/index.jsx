import React from "react";
import { MainComponent } from "./style";

const Main = ({ children }) => {
    return (
        <MainComponent className="col-12 col-lg-10 p-2 overflow-hidden rounded">
            {children}
        </MainComponent>
    );
};

export default Main;
