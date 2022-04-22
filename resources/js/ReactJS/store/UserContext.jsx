import axios from "axios";
import React, { useEffect, useState } from "react";
import formatUrl from "../helpers/formatUrl";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState(null);
    const [customer, setCustomer] = useState(null);
    const [dataAxios, setDataAxios] = useState();
    const host = window.location.origin;
    const port = window.location.port || "80";

    //LIST ALL CUSTOMERS
    const fetchCustomers = async () => {
        setLoading(true);
        await axios
            .get(`${host}:${port}/api`)
            .then(
                (response) => {
                    setCustomers(response.data);
                },
                (error) => {
                    setCustomers(null);
                }
            )
            .catch((error) => {
                console.log(error);
            });

        setLoading(false);
    };

    //FILTER CUSTOMER BY ID
    const fetchCustomerById = async (id) => {
        setLoading(true);
        await axios
            .get(`${host}:${port}/api/customers/id/${id}`)
            .then(
                (response) => {
                    setCustomer(response.data);
                },
                (error) => {
                    setCustomer(null);
                }
            )
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    };

    //FILTER CUSTOMERS BY NAME
    const fetchCustomerByName = async (name) => {
        setLoading(true);
        await axios
            .get(`${host}:${port}/api/customers/name/${name}`)
            .then(
                (response) => {
                    setCustomers(response.data);
                },
                (error) => {
                    setCustomers(null);
                }
            )
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    };

    //FILTER CUSTOMERS BY MEMBERSHIP TYPE
    const fetchCustomerByMembers = async (member) => {
        setLoading(true);
        await axios
            .get("http://localhost/api/members/" + member)
            .then(
                (response) => {
                    setCustomers(response.data);
                },
                (error) => {
                    setCustomers(null);
                }
            )
            .catch((error) => console.log(error));

        setLoading(false);
    };

    //ADD CUSTOMER
    const addCustomer = async (formData) => {
        setLoading(true);
        if (formData.name && formData.email) {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("picture", formData.picture);
            data.append("phone_number", formData.phone_number);
            data.append("birthdate", formData.birthdate);
            data.append("gender", formData.gender);
            data.append("membership", formData.membership);
            data.append("ltv", formData.ltv);
            data.append("last_visit", formData.last_visit);

            await axios.post(`${host}:${port}/api/customers/new`, data).then(
                (response) => {
                    if (!response.data.error) {
                        console.log(response);
                        setDataAxios({
                            msg: response.data.msg,
                            type: "success",
                        });
                    } else {
                        console.log(response);
                        setDataAxios({
                            msg: response.data.error,
                            type: "info",
                        });
                    }
                },
                (error) => {
                    console.log(error);
                    setDataAxios({
                        msg: "Error. Try again later.",
                        type: "warning",
                    });
                }
            );
        } else {
            setDataAxios({
                msg: "Required fields is empty!",
                type: "warning",
            });
        }
        setLoading(false);
    };

    //EDIT CUSTOMER
    const editCustomer = async (id, formData) => {
        setLoading(true);
        if (formData.name && formData.email) {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("email", formData.email);
            data.append("picture", formData.picture);
            data.append("phone_number", formData.phone_number);
            data.append("birthdate", formData.birthdate);
            data.append("gender", formData.gender);
            data.append("membership", formData.membership);
            data.append("ltv", formData.ltv);
            data.append("last_visit", formData.last_visit);
            data.append("_method", "put");

            await axios
                .post(`${host}:${port}/api/customers/edit/${id}`, data)
                .then(
                    (response) => {
                        if (!response.data.error) {
                            console.log(response);
                            setDataAxios({
                                msg: response.data.msg,
                                type: "success",
                            });
                        } else {
                            console.log(response);
                            setDataAxios({
                                msg: response.data.error,
                                type: "info",
                            });
                        }
                    },
                    (error) => {
                        console.log(error);
                        setDataAxios({
                            msg: "Error. Try again later.",
                            type: "danger",
                        });
                    }
                );
        } else {
            setDataAxios({
                msg: "Required fields is empty!",
                type: "info",
            });
        }
        setLoading(false);
    };

    //DELETE CUSTOMER
    const deleteCustomer = async (id) => {
        setLoading(true);
        await axios.delete(`${host}:${port}/api/customers/delete/${id}`).then(
            (response) => {
                if (!response.data.error) {
                    console.log(response);
                    setDataAxios({
                        msg: response.data.msg,
                        type: "success",
                    });
                } else {
                    console.log(response);
                    setDataAxios({
                        msg: response.data.error,
                        type: "info",
                    });
                }
            },
            (error) => {
                console.log(error);
                setDataAxios({
                    msg: "Error. Try again later.",
                    type: "warning",
                });
            }
        );
        setLoading(false);
    };

    //INIT STORAGE
    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <UserContext.Provider
            value={{
                loading,
                customers,
                customer,
                dataAxios,
                fetchCustomers,
                fetchCustomerById,
                fetchCustomerByName,
                fetchCustomerByMembers,
                addCustomer,
                editCustomer,
                deleteCustomer,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
