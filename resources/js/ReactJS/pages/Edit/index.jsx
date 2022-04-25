import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import Alert from "../../components/Alert";
import { UserContext } from "../../store/UserContext";
import { Link, useParams } from "react-router-dom";
import { formatDate } from "../../helpers/formatDate";
import Container from "../../components/Container";
import InputMask from "react-input-mask";

const Edit = () => {
    const params = useParams();
    const { loading, customer, dataAxios, fetchCustomerById, editCustomer } =
        useContext(UserContext);

    useEffect(() => {
        fetchCustomerById(params.id);
    }, []);

    useLayoutEffect(() => {
        if (customer)
            setFormData({
                name: customer?.customers.name ?? "",
                email: customer?.customers.email ?? "",
                phone_number: customer?.customers.phone_number ?? "",
                birthdate: customer?.customers.birthdate ?? "",
                gender: customer?.customers.gender ?? "",
                membership: customer?.customers.membership ?? "no",
                ltv: customer?.customers.ltv ?? "0.00",
                last_visit: customer.customers.last_visit
                    ? formatDate(customer.customers.last_visit, "yyyy-mm-dd")
                    : "",
            });
    }, [customer]);
    const [alert, setAlert] = useState(false);
    const [formData, setFormData] = useState({});

    const handleEdit = async (e) => {
        e.preventDefault();

        await editCustomer(params.id, formData);
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 3000);
    };

    return (
        <>
            <Container className="container row m-auto p-2 bg-white rounded">
                <Aside />
                <Main className="col-10 rounded p-2">
                    <div className="bg-white rounded h-100 p-2">
                        <fieldset>
                            <div className="d-flex justify-content-between">
                                <legend>Edit Customer</legend>
                                <Link
                                    to={"/"}
                                    type="button"
                                    className="btn-close d-block d-lg-none"
                                    aria-label="Close"
                                ></Link>
                            </div>

                            <form
                                id="formAdd"
                                onSubmit={handleEdit}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                                            value={formData.name || ""}
                                            onChange={(item) =>
                                                setFormData({
                                                    ...formData,
                                                    name: item.target.value,
                                                })
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                                            value={formData.email || ""}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0 mb-sm-3">
                                        <label
                                            htmlFor="phone_number"
                                            className="form-label"
                                        >
                                            Phone Number
                                        </label>
                                        <InputMask
                                            mask="(99) 99999-9999"
                                            type="text"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone_number"
                                            value={formData.phone_number || ""}
                                            onChange={(item) =>
                                                setFormData({
                                                    ...formData,
                                                    phone_number:
                                                        item.target.value.replace(
                                                            /[^0-9]/g,
                                                            ""
                                                        ),
                                                })
                                            }
                                        />
                                    </div>
                                    <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                                            value={formData.birthdate || ""}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0 mb-sm-3">
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
                                            value={formData.gender || "others"}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                                            value={formData.membership || "no"}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0 mb-sm-3">
                                        <label
                                            htmlFor="ltv"
                                            className="form-label"
                                        >
                                            ltv
                                        </label>
                                        <input
                                            type="number"
                                            min={0}
                                            className="form-control"
                                            id="ltv"
                                            name="ltv"
                                            value={formData.ltv || "0.00"}
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
                                    <div className="col-12 col-md-6 mb-3 mb-md-0">
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
                                            value={formData.last_visit || ""}
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
                                        disabled={loading ? "disabled" : ""}
                                    >
                                        {!loading
                                            ? "UPDATE CUSTOMER"
                                            : "WAIT..."}
                                    </button>
                                    <Link
                                        to={"/"}
                                        type="button"
                                        className="btn btn-light"
                                    >
                                        CANCEL
                                    </Link>
                                </div>
                            </form>
                        </fieldset>
                    </div>
                </Main>
            </Container>
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

export default Edit;
