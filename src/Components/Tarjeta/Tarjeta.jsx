export function Tarjeta(props){
    return(
        <div className="tarjeta">
            <img src={props.imagen} alt="imagen de perfil" />
            <h2>{props.name}</h2>
            <h3>{props.profesion}</h3>
            <p>{props.descripcion}</p>
        </div>
    )
}