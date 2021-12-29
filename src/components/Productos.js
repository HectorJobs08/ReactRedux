import { Fragment, useEffect, useState} from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { obtenerProductosAction } from "../actions/productosActions";

import Producto from "./Producto";

const Productos = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        const cargarProductos = () => dispatch(obtenerProductosAction());
        cargarProductos();
    }, []);

    const productos = useSelector(state => state.productos.productos);

    return (
        <Fragment>
            <h2 className="text-center my-5">Listado de productos</h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    { productos.length == 0 ? "No hay productos" : 
                        productos.map(producto => (
                            <Producto 
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    }
                </tbody>
            </table>

            {/* {JSON.stringify(productos)} */}
        </Fragment>
    )
}

export default Productos;