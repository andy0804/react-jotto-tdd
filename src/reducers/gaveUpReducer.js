import { actionTypes } from "../actions";

export default (state=false,action) =>{
    switch(action.type){
        case actionTypes.GAVEUP: 
        return true;
        case actionTypes.RESET:
        return false;
        default:
        return state;
    }
}