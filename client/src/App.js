 import Home from "./pages/home/Home";
import Topbar from "./components/TopBar/Topbar";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
 import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import React from "react";
import {  Route, } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes 
} from "react-router-dom";
//import Posts from "./components/posts/Posts";


function App() {
  const user = false;
  return (
    <Router>

    <Topbar/>
    
    {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
      
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="register" element={user? <Home/> : <Register/>} />
          <Route  path="login" element={user? <Home/> :<Login/>} />
          <Route  path="write" element={user?<Write/> :  <Register/>} />
          <Route  path="settings" element={user? <Settings/>: <Register/> } />
          <Route  path="post/:postId" element={<Single/>} />
          {/* <Route exact path="/" element={<Home/>} />
          <Route  path="register" element={<Register/>} />
          <Route  path="login" element={<Login/>} />
          <Route  path="write" element={ <Write/>} />
          <Route  path="settings" element={<Settings/> } />
          <Route  path="singlepost" element={<Single/>} />
          <Route  path="posts" element={<Posts/>} /> */}
          
         
</Routes>

    {/* <Home/>  */}
    {/* <Single/> */}
    {/* <Write/> */}
    {/* <Settings/> */}
    {/* <Login/> */}
    {/* <Register/> */}
    </Router>
  );
}



export default App;

