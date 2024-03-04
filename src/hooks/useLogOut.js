import { useAuthContext } from "./useAuthContext";
import { setLogOut } from "../contexts/AuthContext";

export const useLogOut = () => {
    const [state, dispatch] = useAuthContext();

    const logout = () => {
        localStorage.removeItem("user");

        dispatch(setLogOut())
    }

    return {logout}
}