
import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";



export default function Topbar() {
  const PF = "http://localhost:5000/images/"
  const{ user, dispatch} = useContext(Context)
  const handleLogout = () =>{
   dispatch({
      type: "LOGOUT",
    });

  }
  return (
  
    <div className='top'>
   
      <div className='topLeft'> 
      <a href="https://www.w3schools.com"> 
       <i className=" topIcon fa-brands fa-square-facebook"  target="_blank" rel="noreferrer"></i>
       </a>
      <a href="https://www.youtube.com/watch?v=tlTdbc5byAs&t=480s" target="_blank" rel="noreferrer">
      <i className=" topIcon fa-solid fa-envelope"></i>
      </a>
     
     <a href ="https://www.linkedin.com/in/fariha-faiza-2873a1169/"  target="_blank" rel="noreferrer">
      <i className=" topIcon fa-brands fa-linkedin"></i>
      </a>
      <a href="https://www.instagram.com/farihaarius_/?hl=en"  target="_blank" rel="noreferrer">
      <i className=" topIcon fa-brands fa-square-instagram"></i>
      </a>
      </div>
      <div className='topCent'>
        <ul className="topList">
         <li className="topListItem">
           <Link className="link" to="/" >  HOME</Link>
         </li>
         {/* <li className="topListItem">
         <Link className="link" to="/posts" >  POSTS</Link></li>
         <li className="topListItem">
         <Link className="link" to="/singlepost" > DEMO </Link>
           </li> */}
         <li className="topListItem">
         <Link className="link" to="/write" > WRITE</Link></li>
         <li className="topListItem" onClick={handleLogout}>
        {user &&  "LOGOUT"}</li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user?
          (
            <Link className="link" to="/settings">
          <img 
          className="topImg"
       
         src={PF+ user.profilePic} 
         alt="" 
          /> 
          </Link>
          ):
          (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
         
         <Link className="link" to="/settings">
         <i className ="fa-solid fa-gear" title="Settings"></i>
                </Link>
       
      

       
        </div>
      </div>
    );
  }
