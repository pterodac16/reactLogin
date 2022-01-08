import React from "react";
import {getAxios} from "./api/wrapper";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element}) => {
    let location = useLocation();
    const client = getAxios();
    if (!client) {
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
    return children;
}

export default RequireAuth;
