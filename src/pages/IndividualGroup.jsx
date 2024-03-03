import { useParams } from "react-router-dom";
import { useGetGroupQuery } from "../features/groups/groupsApi";
import ClipLoader from "react-spinners/ClipLoader";
const IndividualGroup = () => {
  const { id } = useParams();

      const {
        data: group,
        error: makosa,
        isLoading: inaload,
        isError: ikoNaMakosa,
        isFetching: inaFetch,
      } = useGetGroupQuery(id);

     console.log(
       `Group: ${group}, error: ${makosa}, isLoading: ${inaload}, isError: ${ikoNaMakosa}, isFetching: ${inaFetch}`
     );
    
  return (
    <>
      {makosa && <div>Error: {makosa.data}</div>}
      {inaload ||
        (inaFetch && <ClipLoader color="#000" loading={true} size={150} />)}

      {group && (
        <>
          <h1>Individual Group Page</h1>
          <p>Group ID: {group.GroupID}</p>
          <p>Group Name: {group.Description}</p>
          <p>Group Description: {group.Description}</p>
        </>
      )}
    </>
  );
};

export default IndividualGroup;
