import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))