import axios from "axios";
import React, { useEffect, useState } from "react";
import formatUrl from "../helpers/formatUrl";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState(null);
    const [dataAxios, setDataAxios] = useState();
    const host = window.location.origin;
    const port = window.location.port || "80";

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

    const fetchCustomerById = async (id) => {
        setLoading(true);
        try {
            await fetch("http://localhost/api/customers/" + id);
            const json = await response.json();
            setCustomers(json);
        } catch (error) {
            setCustomers(null);
        }
        setLoading(false);
    };

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

    const addCustomer = async (formData) => {
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

            //FORMAT BIRTHDATE
            /*if (formData.birthdate) {
            const birthdate = formatDate(formData.birthdate, "yyyy-mm-dd");
            setFormData({ ...formData, birthdate: birthdate });
        }
        //FORMAT LAST_VISIT
        if (formData.last_visit) {
            setFormData({
                ...formData,
                last_visit: formatDate(formData.last_visit, "yyyy-mm-dd"),
            });
        }*/
            /*const settings = {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data/",
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        };*/

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
                msg: "Fill in the required fields",
                type: "warning",
            });
        }
    };

    const deleteCustomer = async (id) => {
        await axios.delete(`${host}:${port}/api/customers/delete/${id}`).then(
            (response) => {
                if (!response.data.error) {
                    console.log(response);
                    setDataAxios({
                        msg: response.data.msg,
                        type: "success",
                    });
                    alert();
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
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <UserContext.Provider
            value={{
                loading,
                customers,
                dataAxios,
                fetchCustomers,
                fetchCustomerById,
                fetchCustomerByName,
                fetchCustomerByMembers,
                addCustomer,
                deleteCustomer,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
