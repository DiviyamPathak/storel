
import { Actiontypes } from "../constants/actiontyp";
const initstate = {
    products : [],
};

export const productsreducer = (state = initstate, {type , payload}) => {
    switch(type){
        case Actiontypes.SET_PRODUCTS:
            return {...state,products:payload}
        default:
            return state
    }
}
export const selectedproductsreducer = (state = initstate, {type , payload}) => {
    console.log(type);
    switch(type){
        case Actiontypes.SEL_PRODUCT:
            return state
        case Actiontypes.REM_SEL_PRODUCT:
            return {}
        default:
            return state
    }
}
