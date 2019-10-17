import * as actionTypes from "./actionTypes";

export function userCheckSuccess(userdata){
    return {
        type:actionTypes.LOGIN_ACTION_SUCCESS,payload:userdata
    }
}


export function userCheck(){
  return function(dispatch){
    let url = "http://localhost:3000/userdata";
    return fetch(url).then(response=>response.json()).then(result=>dispatch(userCheckSuccess(result)));
  }
}


export function userCheckApiCall(){
  
}

