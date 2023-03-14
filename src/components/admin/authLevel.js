const AuthLevel = (props) => {
    if(props.level === 2) {
        return <span className="badge badge-dark">Administración: Todos los recursos</span>
    }

    if(props.level === 1)  {
        return <span className="badge badge-danger">Restringido: Recursos técnicos y de alabanza</span>
    }

    return <span className="badge badge-light">General: Recursos públicos solamente</span>
}

export default AuthLevel;