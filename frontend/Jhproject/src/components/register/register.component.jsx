import { useState } from "react";
import "./register.component.css"
import { useNavigate } from "react-router-dom"
import { dataSend } from "../../service/jhproject.service";

export const RegisterComp = () => {
    const navigate = useNavigate();

    const handleRegisterClick = async() => {
        const { username, email, phoneNumber } = formData;
        if (!username || !email || !phoneNumber) {
            alert("Please fill in all fields before registering!");
            return;
        }

        try {
            const result = await dataSend(username, email, phoneNumber);
            if (result) {
                console.log("User added successfully:", result);
                navigate("/");
            }
        } catch (error) {
            alert("Failed to register");
            console.log(error)
        }
    };


const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        handleRegisterClick();
    }
};

const [formData, setFormData] = useState({
    username: '',
    email: '',
    phoneNumber: '',
});

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
};


return (
    <div className="signin-top-container">
        <div className="signin-container">
            <h1>Sign-In To Your Retirement Plan</h1>
            <div className="input-containers">
                <h3>Username</h3>
                <input name="username" required onChange={handleChange} onKeyDown={handleKeyDown} type="text" placeholder="Enter your username"></input>
                <h3>Email</h3>
                <input name="email" required onChange={handleChange} onKeyDown={handleKeyDown} type="email" placeholder="Enter your email"></input>
                <h3>Phone Number</h3>
                <input name="phoneNumber" required onChange={handleChange} onKeyDown={handleKeyDown} type="number" placeholder="Enter your number"></input>
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