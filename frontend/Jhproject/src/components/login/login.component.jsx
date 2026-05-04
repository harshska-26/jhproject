import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { responseTest } from "../../service/jhproject.service"
import "./login.component.css"
import toast, { Toaster } from 'react-hot-toast';


export const Login = () => {
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        const dataFetch = async () => {
            const Res = await responseTest();
            return Res;
        }
        dataFetch();
    }, [])

    const notify = () => {
        console.log(toast)
        toast.error("Username is Required!")
        console.log("Username is Required!")
    }
    const handleClick = async () => {
        if (!username) {
            notify();
        } else {
            navigate("/password", { state: username })
            const response = await responseTest();
            return response;
        }
    }

    const handleRegisterClick = () => {
        navigate("/register")
    }

    return (
        <div className="signin-container">
            <h1>Sign-In To Your Retirement Plan</h1>
            <div className="input-containers">
                <h3>Username</h3>
                <input onChange={(e) => setUsername(e.target.value)} name="username" type="text" placeholder="Enter your username"></input>
                <label>
                    <input id="checkbox-input" type="checkbox" name="feature" value="newsletter" />
                    Remember Username
                </label>
            </div>
            <div className="first-button-container">
                <button >Forgot Username ?</button>
            </div>
            <div className="second-button-container">
                <button id="continue-button" onClick={handleClick}>Continue</button>
                <Toaster toastOptions={{
                    className:'',
                    style: {
                        padding: '20px',
                        color: 'white',
                        background: 'black',
                    }
                }}/>
                <p>--------------------------or--------------------------</p>
                <button onClick={handleRegisterClick} id="register-button">Register</button>
            </div>
        </div>
    )
}