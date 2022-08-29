import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
          <div className="settingsTitle">
              <span className="settingsTitleUpdate">Update your account</span>
              <span className="settingsTitleDelete">Delete Account</span>
          </div>
          <form className="settingsForm">
              <label> Profile Picture</label>
              <div className="settingsPP">
                  <img   src={process.env.PUBLIC_URL + 'images/singlepost.jpg'} 
                  alt="" />
                  <label htmlFor="fileInput">
                  <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                  </label>
                  <input type="file" id="fileInput" style={{display: 'none'}} />
              </div>
              <label >User Name</label>
              <input type="text" placeholder="Farihaaaa" />
              <label >Email</label>
              <input type="email" placeholder="farihaa100asad@gmail.com" />
              <label >Password</label>
              <input type="password" placeholder="Farihaaaa" />
              <button className="settingsSubmitButton">Update</button>

          </form>
      </div>
       <Sidebar/>
    </div>
  )
}
