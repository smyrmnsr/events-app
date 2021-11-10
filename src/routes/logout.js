import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actions/authAction";


const LogoutPage = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        try {
            dispatch(signOut());
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
}

export default LogoutPage;