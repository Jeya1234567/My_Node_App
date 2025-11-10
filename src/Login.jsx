import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Login()  {
const[email,setEmail]=useState("");
const[pass,setPassword]=useState("");
 const navigate = useNavigate();

const handleSubmit = (e) =>{
e.preventDefault();
if(email === "admin@example.com" && pass === "123"){
    alert("Login successful");
    navigate("/dashboard");
}
    else
    {
 alert("Invalid email and password");
    }

}
    return(
<div className="login-container">
    <h1>login page</h1>
<form onSubmit={handleSubmit}>
     <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
         <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={pass}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
         <button type="submit">Login</button>
</form>
</div>
    );

}

export default Login