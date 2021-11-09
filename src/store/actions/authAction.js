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

export const signIn = () => {

}

export const signOut = () => {
    
}