import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions de redux
import { crearProductoNuevoAction } from "../actions/productosActions";

const NuevoProducto = () => {

    const [nombre, guardarNombre] = useState("");
    const [precio, guardarPrecio] = useState(0);

    // Utilizar use dispatch y te crea una funcion
    const dispatch = useDispatch();

    // Acceder al state del store
    const cargando = useSelector(state => state.productos.loading);
    const error = useSelector(state => state.productos.error);

    // manda a llamar el action de productosActions
    const agregarProducto = producto => dispatch(crearProductoNuevoAction(producto));

    //cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();
        // validar
        if(nombre.trim() == "" || precio <= 0) return;
        // si no hay errores

        // crear el nuevo producto
        agregarProducto({
            nombre,
            precio
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Agregar nuevo producto
                        </h2>
                        <form
                            onSubmit={submitNuevoProducto}
                        >
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    name="nombre"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de producto"
                                    value={nombre}
                                    onChange={e => guardarNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    name="precio"
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio de producto"
                                    value={precio}
                                    onChange={e => guardarPrecio(Number(e.target.value))}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Agregar
                            </button>
                        </form>

                        {cargando ? <p>Cargando</p> : null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;