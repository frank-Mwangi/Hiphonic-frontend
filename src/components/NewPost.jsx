
import avi from "../assets/Avatar.png";
import liveVideo from "../assets/videos.png";
import image from "../assets/photo.png";
import star from "../assets/star.png";
import "./newpost.scss";
import { LuSend } from "react-icons/lu";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postSlice";

const NewPost = () =>
{
  const [ Content, setContent ] = useState( '' )
  const dispatch = useDispatch();
  const handleSubmit = ( e ) =>
  {
    e.preventDefault();
    console.log( "content is ", Content );
    dispatch(addPost({ Content }));

  }
  return (
    <div className="newpost">
      <div className="input">
        <img src={avi} alt="no-pic" />
        <input type="text" name="" id=""
          value={Content}
          onChange={ ( e ) => {setContent( e.target.value ); } } placeholder="What's on your mind?" />
        <button onClick={handleSubmit} type="submit">
          <LuSend />
        </button>
      </div>
      <div className="options">
        <div className="option">
          <img src={liveVideo} alt="" />
          <p>Live Video</p>
        </div>
        <div className="option">
          <img src={image} alt="" />
          <p>Image/Video</p>
        </div>
        <div className="option">
          <img src={star} alt="" />
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
