import { useParams } from "react-router-dom";
import { useGetGroupQuery } from "../features/groups/groupsApi";
import ClipLoader from "react-spinners/ClipLoader";
import "./individual.scss";
import group1 from "../assets/group(1).png";
import { useGetAllGroupMembersQuery } from "../features/groupMembers/groupMembersApi";
import back from "../assets/back.png";
import avatar from "../assets/Avatar.png";

const IndividualGroup = ({ group, handleShowGroupDetails }) => {
  console.log(group);

  // const {
  //   data: group,
  //   error: makosa,
  //   isLoading: inaload,
  //   isError: ikoNaMakosa,
  //   isFetching: inaFetch,
  // } = useGetGroupQuery(id);
  // console.log("id grouip", id);
  const {
    data: groupmembers,
    error,
    isError,
    isFetching,
    isLoading,
  } = useGetAllGroupMembersQuery(group.GroupID);
  //console.log("groupmembers", groupmembers);

  console.log(
    `Groupmembers: ${JSON.stringify(
      groupmembers
    )}, error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );

  if (isFetching || isLoading) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (error || isError || groupmembers == undefined) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="individual-group">
      <div className="group-details">
        <div className="title">
          <span onClick={handleShowGroupDetails}>
            <img src={back} alt="" />
          </span>
          <h1>{group.GroupName}</h1>
        </div>
        {/* <p>Group ID: {group.GroupID}</p> */}
        <div className="group-image">
          <img src={group1} alt="" />
        </div>
        <p>{group.Description}</p>
        {/* <p>Group Description: {group.Description}</p> */}
        <h3>Group Members</h3>
        {groupmembers &&
          [...groupmembers]
            .sort((a, b) => a.Username - b.Username)
            .map((groupMember, index) => (
              <div key={index} className="members">
                <img src={avatar} alt="no-avi" />
                <p>{groupMember.UserName}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default IndividualGroup;
