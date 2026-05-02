import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { responseTest } from "../../service/jhproject.service"
import "./login.component.css"

export const Login = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const dataFetch = async() => {
            const Res = await responseTest();
            return Res;
        }
        dataFetch();
    },[])

    const handleClick = async () => {
        navigate("/password", { state: username })
        const response = await responseTest();
        console.log(response)
        return response;
    }

    const handleRegisterClick = () => {
        navigate("/register")
    }

    return (
        <div className="signin-top-container">
        <div className="signin-container">
            <h1>Sign-In To Your Retirement Plan</h1>
            <div className="input-containers">
                <h3>Username</h3>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your username"></input>
                <label>
                    <input id="checkbox-input" type="checkbox" name="feature" value="newsletter" />
                    Remember Username
                </label>
            </div>
            <div className="first-button-container">
                <button >Forgot Username ?</button>
            </div>
            <div className="second-button-container">
                <button id="continue-button" onClick={handleClick}>Continue</button>
                <p>--------------------------or--------------------------</p>
                <button onClick={handleRegisterClick} id="register-button">Register</button>
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