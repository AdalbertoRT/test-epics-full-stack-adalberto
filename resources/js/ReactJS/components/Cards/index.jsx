import React, { useContext, useEffect } from "react";
import { UserContext } from "../../store/UserContext";
import { Card } from "./style";

const Cards = () => {
    const { customers } = useContext(UserContext);

    return (
        <div className="d-flex justify-content-between gap-2">
            <Card className="bg-white rounded px-2 flex-fill">
                <small>Total Clients</small>
                <div>{customers?.countCustomers.total}</div>
            </Card>
            <Card className="bg-white rounded px-2 flex-fill">
                <small>Members</small>
                <div>{customers?.countCustomers.members}</div>
            </Card>
            <Card className="bg-white rounded px-2 flex-fill">
                <small>New/Returning</small>
                <div>
                    {Math.floor(Math.random() * 10 + 1)}/
                    {Math.floor(Math.random() * 40 + 1)}
                </div>
            </Card>
            <Card className="bg-white rounded px-2 flex-fill">
                <small>Active Members</small>
                <div>{Math.floor(Math.random() * 20 + 1)}</div>
            </Card>
        </div>
    );
};

export default Cards;
