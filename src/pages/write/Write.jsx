import "./write.css"

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg" 
       src={process.env.PUBLIC_URL + 'images/dino1.jpg'} alt="" />
     <form action="" className="writeForm">
         <div className="writeFormGroup">
           <label htmlFor="fileInput">
           <i className="writeIcon fa-solid fa-plus"></i>
           </label>
           <input type="file" id="fileInput" style={{display: "none"}} />
           <input type="text" placeholder="Title" className="writeInput" autoFocus= {true} />
         </div>
         <div className="writeFormGroup">
             <textarea placeholder="write your story...."
              type="text"  
              className="writeInput writeText" >
              </textarea>
         </div>
         <button className="writeSubmit">Publish</button>
     </form>
    </div>
  )
}
