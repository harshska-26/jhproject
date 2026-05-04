import { useLocation, useNavigate } from "react-router-dom"
import "./mfaverify.component.css"
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

export const MfaVerify = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [inputOtp, setinputOtp] = useState(0)
    const receivedOtp = location.state?.otp;

    const notify = () => {
        toast.error("Otp invalid/missing")
    }

    const backClickHandle = () => {
        navigate("/mfasend")
    }

    const verifyClickHandle = () => {
        if(!inputOtp || inputOtp != receivedOtp){
            notify();
            return;
        }else{
            console.log("Success")
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