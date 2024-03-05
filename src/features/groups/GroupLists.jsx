import RecentActivity from "../../components/RecentActivity";
import Group from "./Group";
import { useGetGroupsQuery } from "./groupsApi";
import ClipLoader from "react-spinners/ClipLoader";
import "./groupLists.scss";

const GroupLists = () => {
  const {
    data: groups,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetGroupsQuery({ refetchOnReconnect: true });
  console.log(
    `Groups: ${groups}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );
  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="groupsList">
      <section className="groups-container">
        {groups &&
          [...groups]
            .sort((a, b) => b.GroupID - a.GroupID)
            .map((group, index) => <Group key={index} group={group} />)}
        <RecentActivity groups={groups} />
      </section>
    </div>
  );
};

export default GroupLists;
