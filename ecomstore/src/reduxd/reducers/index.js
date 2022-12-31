
import { combineReducers } from "redux";
import { productsreducer, selectedproductsreducer } from "./proreducers";
const reducers = combineReducers({
  allProducts: productsreducer,
  product: selectedproductsreducer,
});
export default reducers;