import { useParams } from "react-router-dom";
import { useGetGroupQuery } from "../features/groups/groupsApi";
import ClipLoader from "react-spinners/ClipLoader";
import './individual.scss'
import group1 from "../assets/group(1).png";
import { useGetAllGroupMembersQuery } from "../features/groupMembers/groupMembersApi";



const IndividualGroup = () => {
  const { id } = useParams();

      const {
        data: group,
        error: makosa,
        isLoading: inaload,
        isError: ikoNaMakosa,
        isFetching: inaFetch,
      } = useGetGroupQuery(id);
console.log("id grouip", id);
  const { data: groupmembers } = useGetAllGroupMembersQuery(id);
  console.log("groupmembers", groupmembers);

     console.log(
       `Group: ${group}, error: ${makosa}, isLoading: ${inaload}, isError: ${ikoNaMakosa}, isFetching: ${inaFetch}`
     );
    
  return (
    <div className="individual-group">
      {makosa && <div>Error: {makosa.data}</div>}
      {inaload ||
        (inaFetch && <ClipLoader color="#000" loading={true} size={150} />)}

      {group && (
        <>
          <h1>{group.GroupName}</h1>
          {/* <p>Group ID: {group.GroupID}</p> */}
          <p>{group.Description}</p>
          <div className="image">
            <img src={group1} alt="" />
          </div>
          {/* <p>Group Description: {group.Description}</p> */}
          {groupmembers &&
            groupmembers.map((groupMember,index) => (
              <div key={index}>
                <p>{groupMember.UserName}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default IndividualGroup;
