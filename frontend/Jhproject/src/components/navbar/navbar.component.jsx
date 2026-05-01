import { useNavigate } from "react-router-dom";
import "./navbar.component.css"

export const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return (
        <div className="nav-bar">
            <img onClick={handleClick} className="nav-logo" src="/src/assets/NavLogo.svg" />
        </div>
    )
}