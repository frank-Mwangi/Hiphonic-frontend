import React, { useEffect, useState } from "react";
import "./completeProfile.scss";

const CompleteProfile = () => {
  const [completionPercentage, setCompletionPercentage] = useState(0);

  useEffect(() => {
    const calculateCompletionPercentage = () => {
      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      if (userDetails) {
        const totalFields = Object.keys(userDetails).length;
        let filledFields = 0;
        for (const key in userDetails) {
          if (userDetails[key] !== null && userDetails[key] !== "") {
            filledFields++;
          }
        }
        const percentage = Math.round((filledFields / totalFields) * 100); // Round to nearest whole number
        setCompletionPercentage(percentage);
      }
    };

    calculateCompletionPercentage();
  }, []);

  return (
    <div className="complete-profile">
      <label htmlFor="profile">Complete Your Profile</label>
      <progress value={completionPercentage} max={100}></progress>
      <span>{completionPercentage}%</span>
    </div>
  );
};

export default CompleteProfile;



// import "./completeProfile.scss";

// const CompleteProfile = () => {
//   return (
//     <div className="complete-profile">
//       <label htmlFor="profile">Complete Your Profile</label>
//       <div className="input">
//         <input
//           type="range"
//           name="profile"
//           id="profile"
//           min={0}
//           max={100}
//           defaultValue={80}
//         />
//         <span>80%</span>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfile;
