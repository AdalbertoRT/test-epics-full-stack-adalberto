import React, { useState, useEffect } from "react";
import Aside from "../../components/Aside";
import * as C from "../styles";
import formatDate from "../../helpers/formatDate";

const Add = () => {
    const defaultData = {
        name: "",
        email: "",
        picture: "",
        phone_number: "",
        birthdate: "",
        gender: "others",
        membership: "no",
        ltv: 0.0,
        last_visit: "",
    };
    const [formData, setFormData] = useState(defaultData);
    const [alertMsg, setAlertMsg] = useState(null);
    const [load, setLoad] = useState(false);
    const host = window.location.origin;
    const port = window.location.port || "80";

    const addCustomer = async (e, formData) => {
        e.preventDefault();
        setLoad(true);

        // //FORMAT PICTURE
        if (formData.picture) {
            const picture = formData.picture;
            picture.toJSON = () => ({
                lastModified: picture.lastModified,
                lastModifiedDate: picture.lastModifiedDate,
                name: picture.name,
                size: picture.size,
                type: picture.type,
                webkitRelativePath: picture.webkitRelativePath,
            });
            setFormData({ ...formData, picture: JSON.stringify(picture) });
        }

        //FORMAT BIRTHDATE
        if (formData.birthdate) {
            const birthdate = formatDate(formData.birthdate, "yyyy-mm-dd");
            setFormData({ ...formData, birthdate: birthdate });
        }
        //FORMAT LAST_VISIT
        if (formData.last_visit) {
            setFormData({
                ...formData,
                last_visit: formatDate(formData.last_visit, "yyyy-mm-dd"),
            });
        }
        const settings = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };

        const response = await fetch(
            `${host}:${port}/api/customers/new`,
            settings
        );

        const json = await response.json();
        // setAlertMsg(json);
        console.log(json);
        setLoad(false);
    };

    useEffect(() => {
        console.log(JSON.stringify(formData));
    }, [formData]);

    return (
        <C.Container className="container row m-auto p-2 bg-white rounded">
            {alertMsg && (
                <div
                    className={`alert ${
                        alertMsg ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                >
                    {alertMsg.success ? alertMsg.success : alertMsg.error}
                </div>
            )}
            <Aside />
            <C.Main className="col-10 rounded p-2">
                <div className="bg-white rounded h-100 p-2">
                    <fieldset>
                        <legend>Add New Customer</legend>
                        <form
                            onSubmit={(e, formData) => addCustomer(e, formData)}
                        >
                            <div className="mb-3">
                                <label htmlFor="picture" className="form-label">
                                    Picture
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="picture"
                                    name="picture"
                                    onChange={(item) =>
                                        setFormData({
                                            ...formData,
                                            picture: item.target.files[0],
                                        })
                                    }
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
                                        value={formData.name}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                name: item.target.value,
                                            })
                                        }
                                        required
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
                                        value={formData.email}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                email: item.target.value,
                                            })
                                        }
                                        required
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
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                phone_number: item.target.value,
                                            })
                                        }
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
                                        type="date"
                                        className="form-control"
                                        id="birthdate"
                                        name="birthdate"
                                        value={formData.birthdate}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                birthdate: item.target.value,
                                            })
                                        }
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
                                        value={formData.gender}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                gender: item.target.value,
                                            })
                                        }
                                    >
                                        <option value="others">Others</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
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
                                        value={formData.membership}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                membership: item.target.value,
                                            })
                                        }
                                        required
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
                                        type="number"
                                        className="form-control"
                                        id="ltv"
                                        name="ltv"
                                        value={formData.ltv}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                ltv: parseFloat(
                                                    item.target.value
                                                ),
                                            })
                                        }
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
                                        type="date"
                                        className="form-control"
                                        id="last_visit"
                                        name="last_visit"
                                        value={formData.last_visit}
                                        onChange={(item) =>
                                            setFormData({
                                                ...formData,
                                                last_visit: item.target.value,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="d-grid gap-2">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={load ? "disabled" : ""}
                                >
                                    {!load ? "ADD CUSTOMER" : "WAIT..."}
                                </button>
                            </div>
                        </form>
                    </fieldset>
                </div>
            </C.Main>
        </C.Container>
    );
};

export default Add;
