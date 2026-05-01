import { CiHome } from "react-icons/ci";
import "./sidebar.component.css"
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }
    return(
        <div className="side-bar">
        <button onClick={handleClick} className="homelogo-button"><CiHome className="home-icon"/>Home</button>
        </div>
    )
}