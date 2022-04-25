import React, { useContext, useEffect } from "react";
import { UserContext } from "../../store/UserContext";
import { Card } from "./style";

const Cards = () => {
    const { customers } = useContext(UserContext);

    return (
        <div className="row justify-content-between m-0 gap-2">
            <Card className="col-5 col-md bg-white rounded px-2">
                <small>Total Clients</small>
                <div>{customers && customers.countCustomers?.total}</div>
            </Card>
            <Card className="col-5 col-md bg-white rounded px-2">
                <small>Members</small>
                <div>{customers && customers.countCustomers?.members}</div>
            </Card>
            <Card className="col-5 col-md bg-white rounded px-2">
                <small>New/Returning</small>
                <div>
                    {Math.floor(Math.random() * 10 + 1)}/
                    {Math.floor(Math.random() * 40 + 1)}
                </div>
            </Card>
            <Card className="col-5 col-md bg-white rounded px-2">
                <small>Active Members</small>
                <div>{Math.floor(Math.random() * 20 + 1)}</div>
            </Card>
        </div>
    );
};

export default Cards;
