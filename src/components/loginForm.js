import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../store/actions/authAction";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      dispatch(signIn(user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Submit" />
    </form>
  );
};

export default LoginForm;
