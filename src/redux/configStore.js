import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { donHangReducer } from "./reducers/donHangReducer";

const rootReducer = combineReducers({
	donHangReducer: donHangReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
