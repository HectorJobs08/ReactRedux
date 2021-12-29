import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from "../types";

import Swal from "sweetalert2";
import clienteAxios from "../config/axios";

// Comunicación a reducers
// Crear producto
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

// Obtener productos
const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExito = productos => ({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
});

const descargarProductosError = estado => ({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: estado
});

// Actions
// nuevo producto
export function crearProductoNuevoAction(producto){
    return async (dispatch) => {
        dispatch(agregarProducto());
        try{
            console.log(clienteAxios.defaults);
            await clienteAxios.post("/productos", producto);
            dispatch(agregarProductoExito(producto));

            Swal.fire({
                icon: "success",
                title: "Se ha agregado producto con exito!"
            });
        }catch(err){
            console.log(err);
            dispatch(agregarProductoError(true));

            Swal.fire({
                icon: "error",
                title: "Hubo un error en el servidor"
            });
        }
    }
}

// obtener registros de la base de datos
export function obtenerProductosAction() {
    return async (dispatch) => {
        dispatch(descargarProductos());
        try{
            let products = (await clienteAxios.get("/productos")).data;
            dispatch(descargarProductosExito(products));

            return products;
        }catch(err){
            dispatch(descargarProductosError(true));
            Swal.fire({
                type: "error",
                title: "Hubo un error"
            });
        }
    }
}