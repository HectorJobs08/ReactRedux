const EditarProducto = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Editar nuevo producto
                        </h2>
                        <form>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input 
                                    name="nombre"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de producto"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio</label>
                                <input 
                                    name="precio"
                                    type="number"
                                    className="form-control"
                                    placeholder="Precio de producto"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100">
                                    Guardar cambios
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto;