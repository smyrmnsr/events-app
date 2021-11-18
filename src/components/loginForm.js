import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/authAction";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const dispatch = useDispatch();

    /* Pushes the routes using react-router-dom. Replaces window.location.href */
    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    /* Changes the values of "user" object when an imput field is changed */
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            /* Dispatches the signIn function from Redux that checks the credentials and saves the token if the data is correct */
            dispatch(signIn(user));
            
            setTimeout(() => {
                if(localStorage.getItem("token")) {
                    /* Change current route to /manage-event */
                    navigate("/manage-event");
                }
            }, 1000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-full px-4 py-24 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">Sign in to your account</h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <label htmlFor="email-address" className="sr-only">
                    Email address
                    </label>
                    <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={user.email}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                    Password
                    </label>
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={user.password}
                                    onChange={handleChange}
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 border border-transparent rounded-md group hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    </span>
                    Sign in
                </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;