import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoutes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const isAdmin = user.role == "admin";
    return user && isAdmin ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes