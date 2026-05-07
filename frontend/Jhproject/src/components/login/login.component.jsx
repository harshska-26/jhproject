import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { responseTest } from "../../service/jhproject.service";
import "./login.component.css";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dataFetch = async () => {
      const Res = await responseTest();
      setUsers(Res.users);
      return Res;
    };
    dataFetch();
  }, []);

  console.log(users);

  const notify = () => {
    toast.error("Username is Required!");
  };
  const handleClick = async () => {
    try {
      if (!username) {
        notify();
        return;
      }
      const userExists = users.filter((name) => name.username === username);
      console.log(userExists)
      if (userExists.length > 0) {
        navigate("/password", { state: username });
        const response = await responseTest();
        return response;
      }else{
        alert("User not found")
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-container">
      <h1>Sign-In To Your Retirement Plan</h1>
      <div className="input-containers">
        <h3>Username</h3>
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          placeholder="Enter your username"
        ></input>
        <label>
          <input
            id="checkbox-input"
            type="checkbox"
            name="feature"
            value="newsletter"
          />
          Remember Username
        </label>
      </div>
      <div className="first-button-container">
        <button>Forgot Username ?</button>
      </div>
      <div className="second-button-container">
        <button id="continue-button" onClick={handleClick}>
          Continue
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
        <p>--------------------------or--------------------------</p>
        <button onClick={handleRegisterClick} id="register-button">
          Register
        </button>
      </div>
    </div>
  );
};
