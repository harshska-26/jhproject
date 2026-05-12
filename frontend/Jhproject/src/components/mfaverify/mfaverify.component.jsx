import { useNavigate } from "react-router-dom"
import "./mfaverify.component.css"
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

export const MfaVerify = () => {
    const navigate = useNavigate();
    const [inputOtp, setinputOtp] = useState(0)

    const backClickHandle = () => {
        navigate("/mfasend")
    }

    const verifyClickHandle = async() => {
        try{
            await axios.post("/verify-otp", { otp: inputOtp });
            navigate("/testpage")
        }catch(e){
            console.log(`error at click : ${e}`)
            throw e;
        }
    }

    return (
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
            <input name="securitycode" type="text" onChange={(e) => setinputOtp(e.target.value)} placeholder="Your Security Code"></input>
            <button id="forgot-username-button">Forgot Username</button>
            <div className="mfaverify-button-container">
                <button id="back-button" onClick={backClickHandle}>Back</button>
                <button id="verify-button" onClick={verifyClickHandle}>Verify</button>
                <Toaster toastOptions={{
                    style: {
                        color: 'white',
                        padding: '25px',
                        background: 'black'
                    }
                }} />
            </div>
        </div>
    )
}