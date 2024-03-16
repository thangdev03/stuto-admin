import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes