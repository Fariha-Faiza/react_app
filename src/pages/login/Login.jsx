import "./login.css"
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form action="" className="loginForm">
          <label >Email</label>
          <input type="text" className="loginInput" placeholder="Enter your email......."/>
          <label >Password</label>
          <input type="password" className="loginInput" placeholder="Enter your password......." />
              
         <Link className="link loginButton" to="/"> 
       Login
                </Link>
       
      </form>
      
      <button className="loginRegisterButton">
        <Link  className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
