import React from "react";
import {getAxios, getCookie} from "./api/wrapper";
import {Navigate, useLocation} from "react-router-dom";

const RequireAuth = ({ children }: { children: JSX.Element}) => {
    let location = useLocation();
    const cookie = getCookie('token');
    if (cookie === "") {
        return <Navigate to="/login" state={{ from: location}} replace />;
    }
    return children;
}

export default RequireAuth;
