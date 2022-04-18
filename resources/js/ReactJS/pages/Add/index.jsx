import React, { useState } from "react";
import Brand from "../../components/Brand";
import Menu from "../../components/Menu";

const Add = () => {
    const [selectGender, setSelectGender] = useState("default");
    const [selectMembership, setSelectMembership] = useState("no");

    return (
        <div className="container m-auto p-2 bg-white rounded row">
            <div className="col-3">
                <Brand />
                <Menu />
            </div>
            <div className="col-9 rounded p-2">
                <div className="bg-white rounded p-2">
                    <fieldset>
                        <legend>Add New Customer</legend>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="picture" className="form-label">
                                    Picture
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="picture"
                                    name="picture"
                                />
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label
                                        htmlFor="name"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="email"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" className="form-text">
                                        We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <div className="col">
                                    <label
                                        htmlFor="phone_number"
                                        className="form-label"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phone_number"
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="birthdate"
                                        className="form-label"
                                    >
                                        Birthdate
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="birthdate"
                                    />
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col">
                                    <label
                                        htmlFor="gender"
                                        className="form-label"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className="form-select"
                                        id="gender"
                                        name="gender"
                                        aria-label="Default select example"
                                        value={selectGender}
                                        onChange={(e) =>
                                            setSelectGender(e.target.value)
                                        }
                                    >
                                        <option value="default">
                                            Select Gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="others">Others</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="membership"
                                        className="form-label"
                                    >
                                        Membership
                                    </label>
                                    <select
                                        className="form-select"
                                        id="membership"
                                        name="membership"
                                        aria-label="Default select example"
                                        value={selectMembership}
                                        onChange={(e) =>
                                            setSelectMembership(e.target.value)
                                        }
                                    >
                                        <option value="no">No</option>
                                        <option value="yes">Yes</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3 row">
                                <div className="col">
                                    <label htmlFor="ltv" className="form-label">
                                        ltv
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="ltv"
                                    />
                                </div>
                                <div className="col">
                                    <label
                                        htmlFor="last_visit"
                                        className="form-label"
                                    >
                                        Last Visit
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="last_visit"
                                    />
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    ADD CUSTOMER
                                </button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Add;
