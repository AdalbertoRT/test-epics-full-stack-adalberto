import React, { useState, useEffect, useContext } from "react";
import Aside from "../../components/Aside";
import * as C from "../styles";
import Alert from "../../components/Alert";
import { UserContext } from "../../store/UserContext";

const Add = () => {
    const defaultData = {
        name: "",
        email: "",
        picture: "default.jpg",
        phone_number: "",
        birthdate: "",
        gender: "others",
        membership: "no",
        ltv: 0.0,
        last_visit: "",
    };
    const { dataAxios, addCustomer } = useContext(UserContext);
    const [formData, setFormData] = useState(defaultData);
    const [alert, setAlert] = useState(false);
    const [load, setLoad] = useState(false);
    const host = window.location.origin;
    const port = window.location.port || "80";

    const handleAdd = () => {
        addCustomer(formData);

        setAlert(true);
        setLoad(true);
        setTimeout(() => {
            setAlert(false);
            setLoad(false);
        }, 2000);
    };

    /*useEffect(() => {
        console.log(formData);
    }, [formData]);
    */

    return (
        <>
            <C.Container className="container row m-auto p-2 bg-white rounded">
                <Aside />
                <C.Main className="col-10 rounded p-2">
                    <div className="bg-white rounded h-100 p-2">
                        <fieldset>
                            <legend>Add New Customer</legend>
                            {/*<form id="addPicture" encType="multipart/form-data">
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
                                        setFormPicture(item.target.files[0])
                                    }
                                />
                            </div>
                                </form>*/}
                            <form
                                id="addInfo"
                                onSubmit={handleAdd}
                                encType="multipart/form-data"
                            >
                                <div className="mb-3">
                                    <label
                                        htmlFor="picture"
                                        className="form-label"
                                    >
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
                                        <div
                                            id="emailHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
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
                                                    phone_number:
                                                        item.target.value,
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
                                                    birthdate:
                                                        item.target.value,
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
                                            <option value="others">
                                                Others
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">
                                                Female
                                            </option>
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
                                                    membership:
                                                        item.target.value,
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
                                        <label
                                            htmlFor="ltv"
                                            className="form-label"
                                        >
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
                                                    last_visit:
                                                        item.target.value,
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
            {alert && dataAxios && (
                <Alert
                    type={dataAxios.type}
                    msg={dataAxios.msg}
                    setAlert={setAlert}
                />
            )}
        </>
    );
};

export default Add;
