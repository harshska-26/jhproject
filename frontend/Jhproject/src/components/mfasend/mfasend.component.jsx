import { useNavigate } from "react-router-dom";
import "./mfasend.component.css";
import { resOtp } from "../../service/jhproject.service";
import { useState } from "react";

export const MfaSend = () => {
  const [otp, setOtp] = useState(0);
  const [choice, setChoice] = useState("");
  const navigate = useNavigate();

  const backClickHandle = () => {
    navigate("/");
  };

  const sendClickHandle = async () => {
    try {
      if (!choice) {
        return;
      } else {
        const responseOtp = await resOtp();
        const otpData = responseOtp.Otp;
        setOtp(otpData);
        navigate("/mfaverify", { state: { otp: otpData } });
      }
    } catch (e) {
      console.log(`error at mfasend ${e}`);
    }
  };

  console.log(`otp : ${otp}`);

  return (
    <div className="mfasend-container">
      <h1>Verify your identity</h1>
      <h4>
        We're committed to protecting your personal information and we use
        security measures and safeguards to keep your information safe. Please
        choose one of the contact methods below to receive a security code
      </h4>
      <div className="radio-box-container">
        <label>
          <input
            name="radioText"
            required
            id="radio-one"
            type="radio"
            onChange={(e) => setChoice(e.target.value)}
          ></input>
          Text me at XXX-XXX-3359
        </label>
        <label>
          <input
            name="radioText"
            required
            id="radio-two"
            type="radio"
            onChange={(e) => setChoice(e.target.value)}
          ></input>
          Email me at **************@jhancock.com
        </label>
        <label>
          <input
            name="radioText"
            requirhed
            id="radio-three"
            type="radio"
            onChange={(e) => setChoice(e.target.value)}
          ></input>
          Call me at XXX-XXX-3359
        </label>
      </div>
      <div className="mfasend-button-container">
        <button id="back-button" onClick={backClickHandle}>
          Back
        </button>
        <button id="send-code-button" onClick={sendClickHandle}>
          Send Code
        </button>
      </div>
    </div>
  );
};
