import { useNavigate } from "react-router-dom"
import "./mfasend.component.css"

export const MfaSend = () => {
    const navigate = useNavigate();
    const backClickHandle =() => {
        navigate("/password")
    }
    const sendClickHandle = () => {
        navigate("/mfaverify")
    }

    return (
        <div className="mfasend-top-container">
            <div className="mfasend-container">
                <h1>Verify your identity</h1>
                <h4>We're committed to protecting your personal information and we use security measures and safeguards to keep your information safe. Please choose one of the contact methods below to receive a security code</h4>
                <div className="radio-box-container">
                    <label>
                        <input id="radio-one" type="radio"></input>
                        Text me at XXX-XXX-3359
                    </label>
                    <label>
                        <input id="radio-two" type="radio"></input>
                        Email me at **************@jhancock.com
                    </label>
                    <label>
                        <input id="radio-three" type="radio"></input>
                        Call me at XXX-XXX-3359
                    </label>
                </div>
                <div className="mfasend-button-container">
                    <button id="back-button" onClick={backClickHandle}>Back</button>
                    <button id="send-code-button" onClick={sendClickHandle}>Send Code</button>
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