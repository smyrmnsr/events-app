import apis from "../../api";
import { toast } from "react-toastify";

export const signUp = (user) => {
  return (dispatch) => {
    try {
      if (user.name && user.email && user.password && user.confirmpw) {
        apis
          .signUp(user)
          .then((token) => {
            localStorage.setItem("token", token.data.token);

            dispatch({
              type: "SIGN_UP",
              token: token.data,
            });
          })
          .catch((e) => {
            console.log(e);
            toast("Email already exists", {
              position: "bottom-right",
            });
          });
      } else {
        toast("All fields are required", {
          position: "bottom-right",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const signIn = (user) => {
  return (dispatch) => {
    try {
      if (user.email && user.password) {
        apis
          .signIn(user)
          .then((token) => {
            localStorage.setItem("token", token.data.token);

            dispatch({
              type: "SIGN_IN",
              token: token.data,
            });
          })
          .catch((e) => {
            console.log(JSON.stringify(e));
            toast("Email or password incorrect...", {
              position: "bottom-right",
            });
          });
      } else {
        toast("Fields cannot be empty", {
          position: "bottom-right",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: "SIGN_OUT",
      });
    } catch (e) {
      console.log(e);
    }
  };
};
