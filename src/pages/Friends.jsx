import { useState } from "react";
import { useGetFriendsQuery } from "../features/friends/friendsApi";
import verticalDots from "../assets/vertical-dots.png";
const Friends = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [displayedData, setDisplayedData] = useState([]); // State to store displayed friends or suggested friends

    const handleClick = (e) => {
      e.preventDefault();

      setShowDropDown(!showDropDown);
    };

    const handleRemoveFriend = () => {
      console.log("Friend removed");
      setShowDropDown(false);
    };
  
  const {
    data: friendsData,
    isLoading,
    isError,
  } = useGetFriendsQuery({
    User1ID: "your_user_id", // Pass the user ID to fetch friends
  });

  // Handle displaying friends
  const handleFriends = () => {
    setDisplayedData(friendsData);
  };

  // Handle displaying suggested friends
  const handleSuggestions = () => {
    // Logic to fetch and set suggested friends data
    setDisplayedData([]); // Clear displayed data for now
  };

  return (
    <div className="friends">
      <div>
        <button onClick={handleFriends}>Your Friends</button>
        <button onClick={handleSuggestions}>Suggested Friends</button>
      </div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching data</div>
      ) : (
        displayedData.map((friend, index) => (
          <div className="friend" key={index}>
            {/* Render friend data */}
            <div className="top">
              <div className="img">
                <img src={friend.dp} alt="no-dp" />
              </div>
              <div className="details">
                <h4>{friend.name}</h4>
                <p>@{friend.handle}</p>
              </div>
              <div className="dots">
                <img onClick={handleClick} src={verticalDots} alt="" />
                {showDropDown && (
                  <div className="dropdown">
                    <button onClick={handleRemoveFriend}>Remove Friend</button>
                  </div>
                )}
              </div>
            </div>
            <div className="bottom">
              <button>Message</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Friends;

// import avi from "../assets/Avatar.png";
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
// import verticalDots from "../assets/vertical-dots.png";
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
//     // Handle displaying friends
//     // This could involve rendering the friends array in a similar format as you have already done
//     console.log("Displaying friends");
//   };

//   const handleSuggestions = () => {
//     // Handle displaying suggestions
//     // This could involve rendering the suggestions array in a similar format as you have already done
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
//         <button onClick={handleFriends}>Your Friends</button>
//         <button onClick={handleSuggestions}> Suggested Friends</button>
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
