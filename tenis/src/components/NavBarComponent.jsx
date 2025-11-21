import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to={'/'} activeClassName={'active'}>Home</NavLink>
                </li>
                <li>Reservar</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}
export default NavBarComponent;