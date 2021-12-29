import {Link} from "react-router-dom";

const Producto = ({producto}) => {

    const {id, nombre, precio} = producto;
    return (
        <tr>
            <td>{nombre}</td>
            <td>$ {precio}</td>
            <td>
                <Link to={`/productos/editar/${id}`} className="btn btn-primary mr-2">Editar</Link>
                <button className="btn btn-danger" type="button">Eliminar</button>
            </td>
        </tr>
    )
}

export default Producto;