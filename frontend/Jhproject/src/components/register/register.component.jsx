import { useState } from "react";
import "./register.component.css";
import { useNavigate } from "react-router-dom";
import { dataSend } from "../../service/jhproject.service";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const RegisterComp = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    dob: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [password, setPassword] = useState(formData.password);

  const notify = () => {
    toast.error("Please fill all the fields before trying to continue.");
  };

  const handleRegisterClick = async () => {
    const {
      username,
      first_name,
      dob,
      last_name,
      email,
      phoneNumber,
      password,
    } = formData;
    if (
      !username ||
      !first_name ||
      !last_name ||
      !dob ||
      !email ||
      !phoneNumber ||
      !password
    ) {
      notify();
      return;
    }

    try {
      const result = await dataSend(
        username,
        first_name,
        last_name,
        dob,
        email,
        phoneNumber,
        password,
      );
      if (result) {
        console.log("User added successfully:", result);
        navigate("/");
      }
    } catch (error) {
      alert("Failed to register");
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleRegisterClick();
    }
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const handlePassChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setPassword(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="signin-container">
      <h1>Register your retirement account</h1>
      <p id="intro-text">
        Welcome! Our secure website helps make managing your retirement account
        easy. Just follow these simple steps to register and begin your journey
        today. If you are creating an account to request a withdrawal please
        contact us instead as your account will be in a cooling period for 10
        business days after registration.
      </p>
      <div className="r-input-containers">
        <label>
          Username
          <input
            name="username"
            required
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="text"
            placeholder="Enter preferred username"
          ></input>
        </label>
        <div className="each-row">
          <label>
            First Name
            <input
              name="first_name"
              required
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter your first name"
            ></input>
          </label>
          <label>
            Last Name
            <input
              name="last_name"
              required
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter your last name"
            ></input>
          </label>
        </div>
        <label>
          Date of Birth
          <input
            name="dob"
            id="dob"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="date"
            id="dob"
            name="dob"
          />
        </label>
        <p>
          Stay connected and informed. Share your email address to receive
          timely notifications about your account and important plan news.
        </p>
        <label>
          Email
          <input
            name="email"
            required
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="email"
            placeholder="Enter email address"
          ></input>
        </label>
        <p>
          Share your mobile phone number for added security. When signing in to
          your account, you may be asked to verify your identity by entering a
          one-time security code sent to your phone.
        </p>
        <p>
          We value your privacy. For more details, view our{" "}
          <button
            id="pp-button"
            onClick={() =>
              (window.location.href =
                "https://www.johnhancock.com/privacy-security.html")
            }
          >
            privacy policy.
          </button>
        </p>
        <label>
          Phone Number
          <input
            name="phoneNumber"
            required
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            type="number"
            placeholder="(XXX) XXX-XXXX"
          ></input>
        </label>
        <label>
          Password
          <div id="password-container">
            <input
              name="password"
              required
              value={password}
              id="password-input"
              onChange={handlePassChange}
              onKeyDown={handleKeyDown}
              type={`${showPass ? "text" : "password"}`}
              placeholder="Enter your password"
            />
            {
              showPass ?
            <FaEye className="show-pass" onClick={handleShowPass} />
            :
            <FaEyeSlash className="show-pass" onClick={handleShowPass}/>
            }
          </div>
        </label>
        <p id="tcp">
          By providing your telephone number, you consent and agree that
          Manulife John Hancock and its affiliate companies may deliver security
          codes to this number using an auto-dialer and/or prerecorded,
          artificial voice messages, even if that telephone number is on a
          corporate, state, or National Do Not Call Registry, and that your
          consent is not required as a condition of receiving any goods or
          services from Manulife John Hancock or its affiliates. I agree to
          promptly update my profile or notify Manulife John Hancock if my
          telephone number changes.
        </p>
        <label id="cb-label">
          <input id="cb-input" required name="tc-input" type="checkbox"></input>
          By creating an account, I agree to the
          <button
            id="pp-button"
            onClick={() =>
              (window.location.href = "https://www.johnhancock.com/legal.html")
            }
          >
            terms & conditions.
          </button>
        </label>
      </div>
      <div className="last-row">
        <div className="last-row-left">
          <div className="first-button-container">
            <button>Forgot Username ?</button>
            <button>Forgot Password ?</button>
            <button>Forgot Email ?</button>
          </div>
          <div className="second-button-container">
            <button onClick={handleRegisterClick} id="register-button">
              Register
            </button>
            <Toaster
              toastOptions={{
                style: {
                  color: "white",
                  padding: "25px",
                  background: "black",
                },
                icon: "⚠️",
              }}
            />
          </div>
        </div>
        <div className="last-row-right">
          <h2>Already registered ?</h2>
          <button id="redirect-button" onClick={() => navigate("/")}>
            Sign-in
          </button>
        </div>
      </div>
    </div>
  );
};
