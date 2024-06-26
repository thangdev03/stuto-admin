import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuthContext = () => {
    const [state, dispatch] = useContext(AuthContext);

    return [state, dispatch];
}