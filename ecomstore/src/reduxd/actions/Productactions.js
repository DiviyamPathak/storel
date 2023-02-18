import { Actiontypes } from "../constants/actiontyp";

export const setproducts = (products) => {
    return {
        type:Actiontypes.SET_PRODUCTS,
        payload:products,
    }
}
export const selectproducts = (product) => {
    return{
        type:Actiontypes.SEL_PRODUCT,
        payload:product,
    }
}
export const removeSelectedProduct = () => {
    return {
      type: Actiontypes.REM_SEL_PRODUCT,
    };
  };
  