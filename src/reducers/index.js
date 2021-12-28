import { combineReducers } from "redux";
import productosReducers from "./productosReducer";

/** 
 * Aqui se combinan todos los reducers que se crean
 * Como usuarios, productos, clientes, etc.
 * */ 
export default combineReducers({
    productos: productosReducers
})