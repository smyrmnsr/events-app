import React from "react";
import { useDispatch } from "react-redux";
import { signOut } from "../store/actions/authAction";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navigation/nav";


const LogoutPage = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const handleLogout = () => {
        try {
            dispatch(signOut());
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <NavBar />
            <div className="min-h-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 mt-2 rounded" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}

export default LogoutPage;