import usersReducer from "./usersReducer/usersReducer";
import { combineReducers } from "redux";
const rootReducer=combineReducers({
    devsdet:usersReducer
})
export default rootReducer ;