import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

// Crear nuevos productos
export function crearProductoNuevoAction(producto){
    return (dispatch) => {
        dispatch(agregarProducto());
        try{
            dispatch(agregarProductoExito(producto));
        }catch(err){
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
