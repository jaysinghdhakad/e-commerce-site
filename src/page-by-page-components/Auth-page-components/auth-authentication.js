import React from "react";
import { useState } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import {useData} from "../../contexts/userData-context"
import "./auth-authenication.css";
import { useLogin } from "../../contexts/login.context";

export default function Authentication() {
  const {userData} = useData();
  console.log(userData);
  const { state } = useLocation();
  const Navigate = useNavigate();
  
  console.log(state);
  const { userLogin, setUserLogin } = useLogin();
  const [id, setId] = useState("");
  console.log(id);
  const [password, setPassword] = useState("");
  function getUserName(e) {
    
    setId(e.target.value);
  }
  function getUserPassword(e) {
    setPassword(e.target.value);
  }
  function loginCheck() {
    const userInfo = userData.find((item) => (item.name === id));
    if (userInfo) {
      if(userInfo.password === password){
        setUserLogin(true);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true })
        );
      } 
      Navigate(state.from);
    }
    console.log(userLogin);
  }
  return (
    <div class="Authentication">
      <div>Sign In</div>
      <label for="Email">E-mail Or User name</label>
      <input name="Email" onChange={(e) => getUserName(e)} />
      <label for="Password">Password</label>
      <input name="Password" onChange={(e) => getUserPassword(e)} />
      <button class="signin" onClick={() => loginCheck()}>
        Sign In
      </button>
      <div class="other-options">
        <div>Other Options</div>
        <div class="email-verification">
          <img src="google.signup.png" class="login" />
          <img src="facebook.signup.webp" class="login" />
        </div>
        <button class="signup" onClick={()=>Navigate("/sign-up")}>Sign Up</button>
      </div>
    </div>
  );
}
