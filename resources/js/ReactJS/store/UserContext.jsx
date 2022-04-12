import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [customers, setCustomers] = useState(null);

    const fetchCustomers = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost/api/");
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
        <UserContext.Provider value={{ loading, customers }}>
            {children}
        </UserContext.Provider>
    );
};
