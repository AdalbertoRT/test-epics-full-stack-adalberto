import React from "react";
import { LoaderComponent } from "./style";

const Preloader = () => {
    const Cols = () => {
        for (let i = 0; i < 9; i++) {
            return (
                <td className="mx-1">
                    <LoaderComponent />
                </td>
            );
        }
    };

    const Rows = () => {
        for (let i = 0; i < 13; i++) {
            return (
                <tr>
                    <Cols />
                </tr>
            );
        }
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <Cols />
                </tr>
            </thead>
            <tbody>
                <Rows className="my-1" />
            </tbody>
        </table>
    );
};

export default Preloader;
