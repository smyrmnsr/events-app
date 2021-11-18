import apis from "../../api";
import { toast } from "react-toastify";

/* Sign up function that checks the credentials and logges the user in */
export const signUp = (user) => {
  return (dispatch) => {
    try {
      /* If all the fields are not NULL, the user data is sent using the signup endpoint */
      if (user.name && user.email && user.password && user.confirmpw) {
        apis
          .signUp(user)
          .then((token) => {
            localStorage.setItem("token", token.data.token);
            
            /* dispatch the redux action corresponding to the "sign up" */
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

/* Sign in function that checks the credentials, registers a new user and logges the user in */
export const signIn = (user) => {
  return (dispatch) => {
    try {
      /* If all the fields are not NULL, the user data is sent using the signin endpoint */
      if (user.email && user.password) {
        apis
          .signIn(user)
          .then((token) => {
            localStorage.setItem("token", token.data.token);

            /* dispatch the redux action corresponding to the "sign in" */
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

/* Signs the user out */
export const signOut = () => {
  return (dispatch) => {
    try {
      /* dispatch the redux action corresponding to the "sign out" */
      dispatch({
        type: "SIGN_OUT",
      });
    } catch (e) {
      console.log(e);
    }
  };
};
