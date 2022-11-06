import React from "react";
import spotifyImg from "../../assets/logo-spotify.svg";

export default function Spotify() {
  const CLIENT_ID = "21817f3707114f17aa6602dbc548dec2";
  const REDIRECT_URI = "http://localhost:3000/spotify";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  let token = sessionStorage.getItem("token");
  const hash = window.location.hash;

  if (!token && hash) {
    token = hash
      .substring(1)
      .split("&")
      .find((e) => e.startsWith("access_token"))
      .split("=")[1];
    sessionStorage.setItem("access_token", token);
    window.location.hash = "";
    console.log(token);
  }

  const authenticate = () => {
    const url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    window.location.href = url;
  }

  const getData = async (e) => {
    e.preventDefault();
    const baseUrl = "https://api.spotify.com/v1/search";
    const getToken = sessionStorage.getItem("access_token");
    if (getToken) {
      const response = await fetch( baseUrl + "?access_token=" + getToken + "&q=Drake&type=playlist",
        {
          method: "GET",
          headers: {
            Accept: "/",
            "Content-Type": "application/json",
          },
          mode: "no-cors",
        }
      );
      console.log(response);
    }
  };
  return (
    <>
      <img onClick={authenticate} src={spotifyImg} alt="" />
      <button onClick={getData}>buscar</button>
    </>
  ) 
}
