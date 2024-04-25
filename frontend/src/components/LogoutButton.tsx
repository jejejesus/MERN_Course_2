import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    
    const mutation = useMutation(apiClient.logout, {
        onSuccess: () => {
            //window.location.reload();
            showToast({ message: "Sesión cerrada", type: "SUCCESS" });
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    const handleClick = () => {
        mutation.mutate();
    };

    return (
        <button onClick={handleClick}  className="flex items-center text-dark-pink bg-white px-3 py-1 rounded-md font-bold tracking-tight hover:text-white hover:bg-dark-pink">Sign out</button>
    );
}

export default LogoutButton;