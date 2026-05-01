import { useLocation, useNavigate } from "react-router-dom"
import "./password.component.css"
export const Password = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state;

    const SigninClickHandle = () => {
        navigate("/mfasend")
    }

    return (
        <div className="password-top-container">
        <div className="password-container">
            <h1>Welcome {username} !</h1>
            <h3>Password</h3>
            <input type="password" placeholder="Enter your password"></input>
            <button >Forgot Password ?</button>
            <button onClick={SigninClickHandle} id="sign-in-button">Sign-in</button>
        </div>
            <div className="need-help-container">
                <h1>Need Help ?</h1>
                <button id="faq-button">See Frequently Asked Questions</button>
                <h3>Access and use of this website and mobile app are for authorized users only.</h3>
            </div>
        </div>
    )
}