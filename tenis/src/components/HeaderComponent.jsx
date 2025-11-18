import NavBarComponent from "./NavBarComponent.jsx";
import logo from '../assets/images/logo.png';
const HeaderComponent = () => {
    return (
        <header>
            <img src={logo} alt="pelota de tenis con iniciales it" />
            <p>I tenis 🎾</p>
            <NavBarComponent />
        </header>
    );
}
export default HeaderComponent;