import axios from "axios"

export const responseTest = async () => {
    try {
        const res = await axios.get("http://localhost:7000/getUsers")
        return res.data;
    } catch (e) {
        console.log(`error at service ${e}`)
    }
}

export const dataSend = async (username, email, number) => {
    try {
        const payload = {
            username: username,
            email: email,   
            number: number
        };
        const response = await axios.post("http://localhost:7000/addUser", payload);
        return response.data;
    } catch (e) {
        console.log(`error at service ${e}`)
    }
}

export const resOtp = async () => {
    try {
        const res = await axios.get("http://localhost:7000/getOtp")
        return res.data;
    } catch (e) {
        console.log(`error at service ${e}`)
    }
}