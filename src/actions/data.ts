import {setData} from "../reducers/dataReducer";
import {Dispatch} from "redux";

export const getDataFromApi = async (dispatch: Dispatch) => {
    const API_KEY = 'AIzaSyBwM0n4kEHaKbvfjO-3oDXhhb-9--UkCDg';
    const spreadsheetId = '14SKgK07JReMNxSqhEf8rWOdaPTS0onvN6DrB4n0cHOk';

    try {
        const response = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Accounts?key=${API_KEY}`
        );
        const users = await response.json();
        const userFind = localStorage.getItem('token');

        const data = users.values.filter((user: any) => user[0] === userFind);

        if (data) {
            dispatch(setData(data));
        }

        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}