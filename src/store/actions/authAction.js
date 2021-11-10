import apis from "../../api";

export const signUp = (user) => {
    return (dispatch) => {
        try {
            apis.signUp(user).then((token) => {
                localStorage.setItem("token", token.data.token);
                
                dispatch({
                    type: "SIGN_UP",
                    token: token.data
                })
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const signIn = (user) => {
    return (dispatch) => {
        try {
            apis.signIn(user).then((token) => {
                localStorage.setItem("token", token.data.token);

                dispatch({
                    type: "SIGN_IN",
                    token: token.data
                })
            })
            .catch((e) => console.log(e));


        } catch (e) {
            console.log(e);
        }
    }
}

export const signOut = () => {
    return (dispatch) => {
        try {
            dispatch({
                type: "SIGN_OUT"
            })
        } catch (e) {
            console.log(e);
        }
    }
}