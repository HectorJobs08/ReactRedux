import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

import clienteAxios from "../config/axios";

// Crear nuevos productos
export function crearProductoNuevoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try{
            console.log(clienteAxios.defaults);
            await clienteAxios.post("/hola", producto);
            dispatch(agregarProductoExito(producto));
        }catch(err){
            console.log(err);
            dispatch(agregarProductoError(true));
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
});

const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});
