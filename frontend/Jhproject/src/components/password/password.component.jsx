import { useLocation, useNavigate } from "react-router-dom"
import "./password.component.css"
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
export const Password = () => {
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state;

    const notify =() => {
        toast.error("Please enter the password!")
    }

    const SigninClickHandle = () => {
        if(!password){
            notify();
            return;    
        }else{
            navigate("/mfasend")
        }
    }

    return (

        <div className="password-container">
            <h1>Welcome {username} !</h1>
            <h3>Password</h3>
            <input name="password" onChange={(e) => setPassword(e.target.value) }type="password" placeholder="Enter your password"></input>
            <button >Forgot Password ?</button>
            <button onClick={SigninClickHandle} id="sign-in-button">Sign-in</button>
            <Toaster toastOptions={{
                    className:'',
                    style: {
                        padding: '20px',
                        color: 'white',
                        background: 'black',
                    }
                }}/>
        </div>
    )
}