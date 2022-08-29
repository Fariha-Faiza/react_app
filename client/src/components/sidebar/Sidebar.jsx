import { useEffect } from "react";
import { useState } from "react"
import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    }
  getCats()
  },[] )
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">About me </span>
          <img
          src={process.env.PUBLIC_URL + 'images/singlepost.jpg'}
          alt=""
        />
           <p>Lorem Ipsum is simply dum text of the printing 
             industry. Lorem Ipsum has been
               </p>
                <div className="sidebarItem"></div>
      <span className="sidebarTitle">Catagories</span>
      <ul className="sidebarList">
      {cats.map((c) => (

        <Link to={`/?cat=${c.name}`}  className="link">
           <li className="sidebarListItem ">{c.name}</li>
           </Link>
      )
      )}
        
      </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Follow Us</span>
      <div className="sidebarSocial">
      <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
      <i className=" sidebarIcon fa-brands fa-twitter"></i>
      <i className=" sidebarIcon fa-brands fa-pinterest-p"></i>
      <i className="sidebarIcon fa-brands fa-square-instagram"></i>

      </div>
      </div>

     
    </div>
  )
}
