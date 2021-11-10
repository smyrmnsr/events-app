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
            window.location.href="/manage-event";
            
            const user = jwtDecode(action.token.token);
            localStorage.setItem("data", JSON.stringify({'user' : user}));
            return {
                ...initialState,
                token: action.token,
                name: user.name,
                email: user.email,
                _id: user.id,
            }
        default:
            return state;
    }
}

export default authReducer;