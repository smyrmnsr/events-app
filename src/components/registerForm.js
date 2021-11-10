import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/authAction";

const RegisterForm = () => {
    const dispatch = useDispatch();

    const [avatar, setAvatar] = useState({});
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpw: ""
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const handleFileChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setAvatar(reader.result);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            dispatch(signUp({...user, avatar: JSON.stringify(avatar)}));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={handleChange}
                />
                </label>
                <label>
                Email:
                <input
                    name="email"
                    type="text"
                    value={user.email}
                    onChange={handleChange}
                />
                </label>
                <label>
                Password:
                <input
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                />
                </label>
                <label>
                Confirm Password:
                <input
                    name="confirmpw"
                    type="password"
                    value={user.confirmpw}
                    onChange={handleChange}
                />
                </label>
                <label>
                Upload avatar image:
                <input
                    name="avatar"
                    type="file"
                    accept="image/*"
                    value={user.avatar}
                    onChange={handleFileChange}
                    onClick={(event) => { event.target.value = ''}}
                />
                </label>
                <input type="submit" value="Submit" />
            </form>
    )
}

export default RegisterForm;