const Producto = ({producto}) => {

    const {id, nombre, precio} = producto;
    return (
        <tr>
            <td>{nombre}</td>
            <td>$ {precio}</td>
            <td>
                Hola mundo
            </td>
        </tr>
    )
}

export default Producto;