import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const Refresh = () => {
    const params = useParams();
    useEffect(() => {
        window.location.reload();
    }, []);
    return <Navigate to={`/customers/edit/${params.id}`} replace />;
};

export default Refresh;
