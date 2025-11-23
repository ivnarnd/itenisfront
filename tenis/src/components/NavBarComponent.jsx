import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} activeClassName={'active'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/courts'} activeClassName={'active'}>Canchas</NavLink>
                </li>
                <li>
                    <NavLink to={'/register'} activeClassName={'active'}>Registrar</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBarComponent;