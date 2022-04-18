import React, { useEffect, useState } from "react";
import formatUrl from "../helpers/formatUrl";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState(null);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost/api");
            const json = await response.json();
            setCustomers(json);
        } catch (error) {
            setCustomers(null);
        }
        setLoading(false);
    };

    const fetchCustomerById = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost/api/customers/" + id
            );
            const json = await response.json();
            setCustomers(json);
        } catch (error) {
            setCustomers(null);
        }
        setLoading(false);
    };

    const fetchCustomerByName = async (name) => {
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost/api/customers/name/" + name
            );
            const json = await response.json();
            setCustomers(json);
        } catch (error) {
            setCustomers(null);
        }
        setLoading(false);
    };

    const fetchCustomerByMembers = async (member) => {
        setLoading(true);
        try {
            const response = await fetch(
                "http://localhost/api/members/" + member
            );
            const json = await response.json();
            setCustomers(json);
        } catch (error) {
            setCustomers(null);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return (
        <UserContext.Provider
            value={{
                loading,
                customers,
                fetchCustomers,
                fetchCustomerById,
                fetchCustomerByName,
                fetchCustomerByMembers,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
