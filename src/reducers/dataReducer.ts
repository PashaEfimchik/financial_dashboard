const SET_DATA = 'SET_DATA';

const defaultState = {
    data: [],
}

export default function dataReducer(state = defaultState, action: any) {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}

export const setData = (data: any) => ({ type: SET_DATA, payload: data });