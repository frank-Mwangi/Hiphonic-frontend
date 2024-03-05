import dots from "../../assets/vertical-dots.png";
import group1 from "../../assets/group(1).png";
//import avatar from "../../assets/Avatar (9).png";
// import "./groupsTop.scss";
import UD from "../../assets/Avatar (10).png";
import dot from "../../assets/dot.png";
import "./group.scss";
import { useState } from "react";
// import { UseDispatch } from "react-redux";
import {
  useAddGroupMemberMutation,
  useDeleteGroupMemberMutation,
} from "../groupMembers/groupMembersApi";
import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  LoadingToast,
} from "../../components/Toaster";
// import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import IndividualGroup from "../../pages/IndividualGroup";

const Group = ({ group }) => {
  const [joinGroup, setJoinGroup] = useState(false);
  const [addGroupMember, { isLoading }] = useAddGroupMemberMutation();
  const [deleteGroupMember] = useDeleteGroupMemberMutation();
  const [showGroupDetails, setShowGroupDetails] = useState(false);
  const user = JSON.parse(localStorage.getItem("userDetails"));

  const handleJoin = async () => {
    try {
      await addGroupMember({
        GroupID: group.GroupID,
        MemberID: user.UserID,
      });
      setJoinGroup(true);
      SuccessToast("Joined group successfully");
      // dispatch({
      //   type: "ADD_NOTIFFICATION",
      //   group_Name: group.GroupName,
      //   name: user.UserName,
      //   message: `Welcome to "${group.GroupName}" Group`
      // })
    } catch (error) {
      console.error("Error joining group:", error);
      ErrorToast("Failed to join group. Please try again.");
    }
  };

  const handleShowGroupDetails = () => {
    setShowGroupDetails(!showGroupDetails);
  };

  const handleLeave = async () => {
    try {
      await deleteGroupMember(group.GroupID, user.UserID);
      setJoinGroup(false);
      SuccessToast("Left group successfully");
      // dispatch({
      //   type: "ADD_NOTIFICATION",
      //   group_Name: group.GroupName,
      //   name: user.UserName,
      //   message: `You left "${group.GroupName}" Group`

      // })
    } catch (error) {
      console.error("Error leaving group:", error);
      ErrorToast("Failed to leave group. Please try again.");
    }
  };
  // const [joinGroup, setJoinGroup] = useState(false);
  // const [addGroupMember, { isLoading }] = useAddGroupMemberMutation();
  // const [deleteGroupMember] = useDeleteGroupMemberMutation();

  // const user = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(group);

  // const handleJoin = async () => {
  //   setJoinGroup(!joinGroup);
  //   await addGroupMember({
  //     GroupID: group.GroupID,
  //     MemberID: user.UserID,
  //   });
  // };

  // const handleLeave = async () => {
  //   setJoinGroup(!joinGroup);
  //   await deleteGroupMember(group.GroupID, user.UserID);
  // };

  return (
    <div className="group1">
      <div className="card">
        <div className="details">
          <div className="details-left">
            <ToasterContainer />
            <span className="logo">
              <img src={UD} alt="no-icon" />
            </span>
            <div className="group-name">
              {/* <Link to={`${group.GroupID}`}></Link> */}
              <h4>{group.GroupName}</h4>
              <span>
                <p>{group.Description} </p>
                <img src={dot} alt="" />
                <p> 7 posts a day</p>
              </span>
            </div>
          </div>
          <span>
            <img src={dots} alt="" />
          </span>
        </div>
        <div className="image">
          <img src={group1} alt="" />
        </div>
        <div className="bottom">
          {joinGroup ? (
            <button onClick={handleLeave}> Leave Group</button>
          ) : (
            <button onClick={handleJoin}>Join Group</button>
          )}
        </div>
        <button onClick={handleShowGroupDetails}>Show More</button>
      </div>
      <div className="card">
        <div className="details">
          <div className="details-left">
            <ToasterContainer />
            <span className="logo">
              <img src={UD} alt="no-icon" />
            </span>
            <div className="group-name">
              {/* <Link to={`${group.GroupID}`}> */}

              {/* </Link> */}
              <h4>{group.GroupName}</h4>
              <span>
                <p>{group.Description} </p>
                <img src={dot} alt="" />
                <p> 7 posts a day</p>
              </span>
            </div>
          </div>
          <span>
            <img src={dots} alt="" />
          </span>
        </div>
        <div className="image">
          <img src={group1} alt="" />
        </div>
        <div className="bottom">
          {joinGroup ? (
            <button onClick={handleLeave}> Leave Group</button>
          ) : (
            <button onClick={handleJoin}>Join Group</button>
          )}
        </div>
        <button onClick={handleShowGroupDetails}>Show More</button>
      </div>
      {showGroupDetails &&
        createPortal(
          <IndividualGroup
            group={group}
            handleShowGroupDetails={handleShowGroupDetails}
          />,
          document.body
        )}
    </div>
    // <div className="images">
  );
};

export default Group;
