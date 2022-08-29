
import axios  from "axios";
import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"

export default function SinglePost() {
  const location = useLocation()
 // console.log(location.pathname.split("/")[2]);
 const path = location.pathname.split("/")[2];
const [post, setPost] = useState({})

 useEffect(()=>{
const getPost = async () => {
 const res = await axios.get("/posts/" +path);
 console.log('hi', res);
 setPost(res.data);
};
getPost()
}, [path])

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
              <img 
             // src={process.env.PUBLIC_URL + 'images/66.jpeg'} 
             src = {post.photo}
              alt="" 
             className="singlePostImg" />
        )}
<h1 className="singlePostTitle">{post.title}
<div className="singlePostEdit">
<i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
<i className="singlePostIcon  fa-solid fa-trash-can"></i>
</div>
</h1>
<div className="singlePostInfo">

<span className="singlePostAuthor">       
          Author:  
           <Link to={`/?user=${post.username}`} className="link">
           <b> {post.username}  </b>
           </Link>
              
        
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
        {post.desc}
        </p>
      </div>
    </div>
  )
}
