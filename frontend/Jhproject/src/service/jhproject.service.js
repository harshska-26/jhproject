import axios from "axios"

export const responseTest = async () => {
    try {
        const res = await axios.get("http://localhost:7000/getUsers")
        return res.data;
    } catch (e) {
        console.log(`error at service ${e}`)
    }
}
responseTest();

export const dataSend = async (username, first_name, last_name,dob, email, number, password) => {
    try {
        const payload = {
            username: username,
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            email: email,   
            number: number,
            password: password
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