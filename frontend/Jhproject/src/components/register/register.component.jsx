import "./register.component.css"
import { useNavigate } from "react-router-dom"

export const RegisterComp = () => {
    const navigate=useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className="signin-top-container">
        <div className="signin-container">
            <h1>Sign-In To Your Retirement Plan</h1>
            <div className="input-containers">
                <h3>Username</h3>
                <input type="text"placeholder="Enter your username"></input>
                <h3>Email</h3>
                <input type="email"placeholder="Enter your email"></input>
                <h3>Phone Number</h3>
                <input type="number" placeholder="Enter your number"></input>
                <label>
                    <input id="checkbox-input" type="checkbox" name="feature" value="newsletter" />
                    Remember Username
                </label>
            </div>
            <div className="first-button-container">
                <button >Forgot Username</button>
                <button >Forgot Password</button>
                <button >Forgot Email</button>
            </div>
            <div className="second-button-container">
                <button onClick={handleClick} id="register-button">Register</button>
            </div>
        </div>
        <div className="need-help-container">
                <h1>Need Help ?</h1>
                <button id="faq-button">See Frequently Asked Questions</button>
                <h3>Access and use of this website and mobile app are for authorized users only.</h3>
            </div>
            </div>
    )
}