
// import avi1 from "../assets/Avatar (1).png";
// import avi2 from "../assets/Avatar (2).png";
// import avi3 from "../assets/Avatar (4).png";
// import avi4 from "../assets/Avatar (5).png";
// import avi5 from "../assets/Avatar (6).png";
// import avi6 from "../assets/Avatar (7).png";
// import avi7 from "../assets/Avatar (8).png";
// import avi8 from "../assets/Avatar (6).png";
// import avi9 from "../assets/Avatar (2).png";
// import "./friends.scss";
// import { useState } from "react";

// const Friends = () => {
//   const [showDropDown, setShowDropDown] = useState(false);

//   const handleClick = (e) => {
//     e.preventDefault();

//     setShowDropDown(!showDropDown);
//   };

//   const handleRemoveFriend = () => {
//     console.log("Friend removed");
//     setShowDropDown(false);
//   };

//   const handleFriends = () => {

//     console.log("Displaying friends");
//   };

//   const handleSuggestions = () => {
    
//     console.log("Displaying suggestions");
//   };

//   const friends = [
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi1,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi2,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi3,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi4,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi5,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi6,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi7,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi8,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi9,
//     },
//   ];

//   return (
//     <div className="friends">
//       <div>
//         <button onClick={handleFriends}>YourFriends</button>
//         <button onClick={handleSuggestions}>Handle Suggestions</button>
//       </div>
//       {friends &&
//         friends.map((friend, index) => {
//           return (
//             <div className="friend" key={index}>
//               <div className="top">
//                 <div className="img">
//                   <img src={friend.dp} alt="no-dp" />
//                 </div>
//                 <div className="details">
//                   <h4>{friend.name}</h4>
//                   <p>@{friend.handle}</p>
//                 </div>
//                 <div className="dots">
//                   <img onClick={handleClick} src={verticalDots} alt="" />
//                   {showDropDown && (
//                     <div className="dropdown">
//                       <button onClick={handleRemoveFriend}>
//                         Remove Friend
//                       </button>
//                     </div>
//                   )}{" "}
//                 </div>
//               </div>
//               <div className="bottom">
//                 <button>Message</button>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default Friends;


import './friendsCard.scss';
import avi from "../assets/Avatar.png";
import verticalDots from "../assets/vertical-dots.png";
import { useState } from 'react';


const FriendCard = ( { user } ) =>
{
    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = (e) => {
      e.preventDefault();

      setShowDropDown(!showDropDown);
    };

    const handleRemoveFriend = () => {
      console.log("Friend removed");
      setShowDropDown(false);
    };

    

    
  return (
    <div className="friend">
      <div className="top">
        <div className="img">
          <img src={avi} alt="no-dp" />
        </div>
        <div className="details">
          <h4>{user.Username}</h4>
          <p>{user.TagName}</p>
        </div>
        <div className="dots">
           <img onClick={handleClick} src={verticalDots} alt="" />
                   {showDropDown && (
                    <div className="dropdown">
                      <button onClick={handleRemoveFriend}>
                        Remove Friend
                      </button>
                    </div>
                   )}
        </div>
      </div>
      <div className="bottom">
        <button>Message</button>
      </div>
    </div>
  );
}

export default FriendCard