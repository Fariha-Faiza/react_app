import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
          <span className="sidebarTitle">About me </span>
          <img
          src={process.env.PUBLIC_URL + 'images/russell.jpg'}
          alt=""
        />
           <p>Lorem Ipsum is simply dum text of the printing 
             industry. Lorem Ipsum has been
               </p>
                <div className="sidebarItem"></div>
      <span className="sidebarTitle">Catagories</span>
      <ul className="sidebarList">
          <li className="sidebarListItem ">Life</li>
          <li className="sidebarListItem ">Music</li>
          <li className="sidebarListItem ">Sports</li>
          <li className="sidebarListItem ">Tech</li>
          <li className="sidebarListItem ">Cinema</li>
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
