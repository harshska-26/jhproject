import { useLocation, useNavigate } from "react-router-dom";
import "./password.component.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { getUser } from "../../service/jhproject.service";
import bcrypt from "bcryptjs";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state;

  const notify = () => {
    toast.error("Please enter the password!");
  };

  useEffect(() => {
    const dataService = async () => {
      const data = await getUser(username);
      setHashedPassword(data.password);
    };
    dataService();
  }, []);

  const SigninClickHandle = async () => {
    if (!password) {
      notify();
      return;
    }

    try {
      const isMatch = await bcrypt.compare(password, hashedPassword);
      if (isMatch) {
        console.log("Password is correct!");
        navigate("/mfasend");
      } else {
        toast.error("Incorrect password!");
      }
    } catch (err) {
      console.error("Comparison error:", err);
    }
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="password-container">
      <h1>Welcome {username} !</h1>
      <h3>Password</h3>
      <div id="password-container">
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPass ? "text" : "password"}
          placeholder="Enter your password"
        ></input>
        {showPass ? (
          <FaEye className="show-pass" onClick={handleShowPass} />
        ) : (
          <FaEyeSlash className="show-pass" onClick={handleShowPass} />
        )}
      </div>
      <button>Forgot Password ?</button>
      <button onClick={SigninClickHandle} id="sign-in-button">
        Sign-in
      </button>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "20px",
            color: "white",
            background: "black",
          },
        }}
      />
    </div>
  );
};
