const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const UPDATE_SUCCESS = "UPDATE_SUCCESS";

const defaultState = {
    currentUser: {},
    isAuth: false,
};

export default function userReducer(state = defaultState, action: any) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            };
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                currentUser: {},
                isAuth: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        case UPDATE_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
            }
        default:
            return state;
    }
}

export const setUser = (user: any) => ({ type: SET_USER, payload: user });
export const logout = () => ({ type: LOGOUT });
export const loginSuccess = (user: any) => ({ type: LOGIN_SUCCESS, payload: user });
export const updateSuccess = (user: any) => ({ type: UPDATE_SUCCESS, payload: user });