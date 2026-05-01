import axios from "axios"

export const responseTest = async() => {
    try{
        const res = await axios.get("http://localhost:7000/getRequest")
        console.log(res)
        return res.data;
    }catch(e){
        console.log(`error at service ${e}`)
    }
}   