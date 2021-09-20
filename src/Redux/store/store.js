import rootReducer from "../reducer/rootReducer";
import { createStore ,applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
const configStore=createStore(rootReducer,applyMiddleware(logger,thunk))
export default configStore