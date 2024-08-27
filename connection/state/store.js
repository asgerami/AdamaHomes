import { thunk } from "redux-thunk";

const { combineReducers, legacy_createStore, applyMiddleware } = require("redux");
const { authReduser } = require("./authebtication/reducer");

const rooteReducer=combineReducers({
   athu: authReduser
})
export const store=legacy_createStore(rooteReducer,applyMiddleware(thunk))
// use store in index.js on frontend <provider store={store}> <App/> <provider> 