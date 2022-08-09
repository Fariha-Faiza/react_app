
import "./topbar.css";


export default function Topbar() {
  return (
    <div className='top'>
   
      <div className='topLeft'> 
      <i className=" topIcon fa-brands fa-square-facebook"></i>
      <i className=" topIcon fa-brands fa-twitter"></i>
      <i className=" topIcon fa-brands fa-pinterest-p"></i>
      <i className=" topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className='topCent'>
        <ul className="topList">
         <li className="topListItem">HOME</li>
         <li className="topListItem">ABOUT</li>
         <li className="topListItem">CONTACT</li>
         <li className="topListItem">WRITE</li>
         <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className='topRight'>
        <img 
        className="topImg"
     
       src={process.env.PUBLIC_URL + 'images/dp.jpg'} alt="logo" >
        </img>
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
