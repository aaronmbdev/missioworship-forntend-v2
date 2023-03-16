
const RoleListElement = (props) => {
    const roles = [];
    props.roles.forEach(element => {
        roles.push(<span className="badge badge-primary m-1" key={element.id}>{element.name}</span>);
    });
    return(roles);
}


export default RoleListElement;
