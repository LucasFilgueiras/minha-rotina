import axios from "axios";

const baseUrl = "https://minha-rotina.herokuapp.com";

const user = JSON.parse(localStorage.getItem("user"));

console.log(user);

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    "access-token": user && user["access-token"],
    uid: user?.uid,
    client: user?.client,
  }
});
