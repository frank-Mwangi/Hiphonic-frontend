import React, { useState } from "react";
import dots from "../assets/horizontal-dots.png";
import "./photos.scss";
import CreatePhoto from "../features/photos/CreatePhoto";
import { useAddPhotoMutation } from "../features/photos/photoApi";
import PhotoLists from "../features/photos/photoLists"; 

const Photos = () => {
  const [showAddPhotoOption, setShowAddPhotoOption] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");

  const [addPhoto] = useAddPhotoMutation();

  const handleAddPhoto = async () => {
    try {
      // Perform validation on photoUrl if needed

      // Call the addPhoto mutation
      await addPhoto({photoUrl: PhotoURL, UserID: UserID });

      // Clear the input field and hide the "Add Photo" option
      setPhotoUrl("");
      setShowAddPhotoOption(false);
    } catch (error) {
      console.error("Error adding photo:", error);
      // Handle error
    }
  };

  return (
    <div className="photos-page">
      <div className="head">
        <div className="lefthead">
          <div className="top">
            <h1>Your Photos</h1>
            <span onClick={() => setShowAddPhotoOption(!showAddPhotoOption)}>
              <img src={dots} alt="dots" />
            </span>
          </div>
          <div className="mid">
            <span>Photos About You</span>
            <span>Your Photos</span>
            <span>Albums</span>
          </div>
          <div className="bottom">
            <h4>Total Photos</h4>
            <p>Total Photos About You</p>
          </div>
        </div>
        {showAddPhotoOption && (
          <CreatePhoto />
          // <div className="add-photo-option">
          //   <input
          //     type="text"
          //     value={photoUrl}
          //     onChange={(e) => setPhotoUrl(e.target.value)}
          //     placeholder="Enter photo URL"
          //   />
          //   <button onClick={handleAddPhoto}>Add Photo</button>
          // </div>
        )}
      </div>

      <PhotoLists />
    </div>
  );
};

export default Photos;






// import React from "react";
// import dots from "../assets/horizontal-dots.png";
// import "./photos.scss";
// import { useAddPhotoMutation } from "../features/photos/photoApi";
// import PhotoLists from "../features/photos/photoLists"; // Import the PhotoLists component

// const Photos = () => {
//   return (
//     <div className="photos-page">
//       <div className="head">
//       <div className="lefthead">
//       <div className="top">
//         <h1>Your Photos</h1>
//         <span>
//           <img  src={dots} alt="dots"  />
//         </span>
//       </div>
//       <div className="mid">
//         <span>Photos About You</span>
//         <span>Your Photos</span>
//         <span>Albums</span>
//       </div>
//       <div className="bottom">
//         <h4>Total Photos</h4>
//         <p>Total Photos About You</p>
//       </div>
//       </div>
//       {/* <button>Add a New Photo</button>       */}
//       </div>
     
//       <PhotoLists />
//     </div>
//   );
// };

// export default Photos;









// import React from "react";
// import dots from "../assets/horizontal-dots.png";
// import photo1 from "../assets/pic7.png";
// import photo2 from "../assets/pic2.png";
// import photo3 from "../assets/pic3.png";
// import photo4 from "../assets/pic4.png";
// import photo5 from "../assets/pic5.png";
// import photo6 from "../assets/pic6.png";
// import photo7 from "../assets/pic7.png";
// import photo8 from "../assets/pic8.png";
// import photo9 from "../assets/pic9.png";
// import photo10 from "../assets/pic10.png";
// import photo11 from "../assets/pic11.png";
// import photo12 from "../assets/pic12.png";
// import "./photos.scss";
// import Gallery from "../features/Gallery";

// const Photos = () => {
//   const pics = [
//     {
//       img: photo1,
//     },
//     {
//       img: photo2,
//     },
//     {
//       img: photo3,
//     },
//     {
//       img: photo4,
//     },
//     {
//       img: photo5,
//     },
//     {
//       img: photo6,
//     },
//     {
//       img: photo7,
//     },
//     {
//       img: photo8,
//     },
//     {
//       img: photo9,
//     },
//     {
//       img: photo10,
//     },
//     {
//       img: photo11,
//     },
//     {
//       img: photo12,
//     },
//   ];

//   return (
//     <div className="photos-page">
//       <div className="top">
//         <h1>Your Photos</h1>
//         <span>
//           <img src={dots} />
//         </span>
//       </div>
//       <div className="mid">
//         <span>Photos About You</span>
//         <span>Your Photos</span>
//         <span>Albums</span>
//       </div>
//       <div className="bottom">
//         <h4>Total Photos</h4>
//         <p>{pics.length} Total Photos About You</p>
//       </div>
//       <Gallery />
//     </div>
//   );
// };

// export default Photos;
