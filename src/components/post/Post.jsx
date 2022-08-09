import "./post.css"

export default function Post() {
  return (
    <div className="post">
     <img className="postImg"  
     src={process.env.PUBLIC_URL + 'images/R.jpg'}
     alt="" />
     <div className="postInfo">
         <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
         </div>
         <div className="postTitle">Lorem ipsum dolor sit amet</div>
         <hr />
         <span className="postDate">1 hour ago</span>
     </div>
     <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}
