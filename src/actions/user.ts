import {setUser, logout, loginSuccess} from "../reducers/userReducer";
import {Dispatch} from "redux";

export const login = async (email: string, password: string, dispatch: Dispatch) => {
    const API_KEY = 'AIzaSyBwM0n4kEHaKbvfjO-3oDXhhb-9--UkCDg';
    const spreadsheetId = '14SKgK07JReMNxSqhEf8rWOdaPTS0onvN6DrB4n0cHOk';

    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Accounts?key=${API_KEY}`
        );
        const users = await response.json();
        let user = users.values.find((user: any) => user[0] === email && user[1] === password);
        if (user) {
            dispatch(setUser(user));
            localStorage.setItem('token', user[0]);
        }
        return user;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export const logoutUser = async (dispatch: Dispatch) => {
    dispatch(logout());
    localStorage.removeItem('token');
}
export const loginSuccessUser = async (user: any, dispatch: Dispatch) => {
    dispatch(loginSuccess(user));
    localStorage.setItem('login:', user[0] + ' - ' + (new Date())?.toLocaleString());

    const databaseURL = 'https://financial-dashboard-b849e-default-rtdb.asia-southeast1.firebasedatabase.app';
    const response = await fetch(`${databaseURL}/users.json`, {
        method: 'POST',
        body: JSON.stringify({
            email: user[0],
            login: (new Date())?.toLocaleString()
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log("data: ", data);
}

export const updateSuccessUser = async (user: any, dispatch: Dispatch) => {
    const databaseURL = 'https://financial-dashboard-b849e-default-rtdb.asia-southeast1.firebasedatabase.app';
    const response = await fetch(`${databaseURL}/users.json`, {
        method: 'POST',
        body: JSON.stringify({
            email: user,
            refresh: (new Date())?.toLocaleString(),
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data = await response.json();
    console.log("data: ", data);
}