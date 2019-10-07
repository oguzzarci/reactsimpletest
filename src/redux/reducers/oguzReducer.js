import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState";


export default function oguzReducer(state=initialState.categories,action){

    switch (action.type) {
        
        case actionTypes.LOGIN_ACTION_SUCCESS:
            return action.payload
        default:
            return state;
    }
}