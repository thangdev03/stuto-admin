import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

const PrivateRoutes = () => {
    const [state, dispatch] = useAuthContext();
    const { user } = state;
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes