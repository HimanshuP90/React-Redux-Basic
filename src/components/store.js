import { createStore, applyMiddleware } from "redux";

import { initialState } from "./reducer";

import reducer from "./reducer";

import thunk from "redux-thunk";

const store = createStore(reducer, initialState, applyMiddleware(thunk));

window.sd = store;
export default store;
