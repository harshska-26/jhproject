import { useNavigate } from "react-router-dom"
import "./mfaverify.component.css"

export const MfaVerify = () => {
    const navigate = useNavigate();

    const backClickHandle = () => {
        navigate("/mfasend")
    }

    return (
        <div className="mfaverify-top-container">
            <div className="mfaverify-container">
                <h1>Verify your identity</h1>
                <h4>Do not close this brower window.</h4>
                <h4>A security code has been sent to ***************@jhancock.com</h4>
                <ul>
                    <li>The code is valid for 10 minutes</li>
                    <li>To request a new code, click "Resend Security Code."</li>
                    <li>You will be locked out after too many failed login attempts.</li>
                </ul>
                <h3>Enter your Security code</h3>
                <input type="text" placeholder="Your Security Code"></input>
                <button id="forgot-username-button">Forgot Username</button>
                <div className="mfaverify-button-container">
                    <button id="back-button" onClick={backClickHandle}>Back</button>
                    <button id="verify-button">Verify</button>
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