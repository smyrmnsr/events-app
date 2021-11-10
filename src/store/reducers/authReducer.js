import jwtDecode from "jwt-decode";

const initialState = {
    token: localStorage.getItem("token"),
    _id: null,
    name: null,
    email: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_UP":
        case "SIGN_IN":
            const user = jwtDecode(action.token.token);
            localStorage.setItem("data", JSON.stringify({'user' : user}));

            window.location.href="/manage-event";

            return {
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user.id,
            }
        case "SIGN_OUT":
            localStorage.removeItem("data");
            localStorage.removeItem("token");

            window.location.href="/";
            return {
                token: null,
                _id: null,
                name: null,
                email:null
            }
        default:
            return state;
    }
}

export default authReducer;