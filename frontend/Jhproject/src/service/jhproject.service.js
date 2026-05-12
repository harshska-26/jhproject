import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:7000",
  withCredentials: true,
});

export const responseTest = async () => {
  try {
    const res = await API.get("/getUsers");
    return res.data;
  } catch (e) {
    console.log(`error at service ${e}`);
  }
};

export const dataSend = async (
  username,
  first_name,
  last_name,
  dob,
  email,
  number,
  password,
) => {
  try {
    const payload = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      email: email,
      number: number,
      password: password,
    };
    const response = await API.post("/addUser", payload);
    return response.data;
  } catch (e) {
    console.log(`error at service ${e}`);
  }
};

export const resOtp = async () => {
  try {
    const res = await API.get("/getOtp");
    return res.data;
  } catch (e) {
    console.log(`error at service ${e}`);
  }
};

export const getUser = async (username) => {
  try {
    const res = await API.get("/getUser", {
      params: {username: username},
      });
    return res.data;
  } catch (e) {
    console.log(e.message);
    throw e;
  }
};

export const loginUser = async (username, password) => {
  try {
    const payload = {
      username: username,
      password: password,
    }
    const response = await API.post("/login", payload);
    return response.data;
  } catch (e) {
    console.log(`Login service error: ${e}`);
    throw e;
  }
};