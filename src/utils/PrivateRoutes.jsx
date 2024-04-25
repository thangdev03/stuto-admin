import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAuth = user && user.role == "admin" ? true : false;
    return isAuth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes