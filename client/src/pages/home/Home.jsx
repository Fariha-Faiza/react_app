import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"


export default function Home() {
  const [posts, setPosts] = useState([]);
 
  const {search} = useLocation();
 

 
   
  useEffect(()=>{
   const fetchPosts =async()=>{
    const res = await axios.get("/posts"+ search)
    console.log('hellloooooooooo', res);
    setPosts(res.data)
   }
   fetchPosts()
  }, [search])

  return (
      <>
    <Header/>
    <div className="home"> 
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </>
  )
}