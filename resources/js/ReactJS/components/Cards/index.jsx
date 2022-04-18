import React from "react";

const Cards = () => {
    return (
        <div className="d-flex justify-content-between gap-2">
            <div className="bg-white rounded p-2 flex-fill">
                <small>Total Clients</small>
                <div></div>
            </div>
            <div className="bg-white rounded p-2 flex-fill">
                <small>Members</small>
                <div></div>
            </div>
            <div className="bg-white rounded p-2 flex-fill">
                <small>New/Returning</small>
                <div>
                    {Math.floor(Math.random() * 10 + 1)}/
                    {Math.floor(Math.random() * 40 + 1)}
                </div>
            </div>
            <div className="bg-white rounded p-2 flex-fill">
                <small>Active Members</small>
                <div>{Math.floor(Math.random() * 20 + 1)}</div>
            </div>
        </div>
    );
};

export default Cards;
