import {combineReducers} from "redux"
import userCheckReducer from "./userCheckReducer"
import oguzReducer from "./oguzReducer"




const rootReducer = combineReducers({
    userCheckReducer,
    oguzReducer
    
})

export default rootReducer;