
import Group from "./Group";
import { useGetGroupsQuery } from "./groupsApi";
import ClipLoader from "react-spinners/ClipLoader";





const GroupLists = () =>
{
    const {
        data: groups,
        error,
        isLoading,
        isError,
        isFetching,
    } = useGetGroupsQuery( { refetchOnReconnect: true } );
     console.log(
       `Groups: ${groups}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
    );
    if ( isLoading || isFetching )
    {
        return <ClipLoader color='#000' loading={ true } size={ 150} />
    }
    if ( isError )
    {
        return <div>Error: { error.data.message}</div>
    }
  return (
      <div className="groupsList">
          <section className="groups-container">
              { groups && groups.map( ( group, index ) => <Group key = {index} group={group}
              /> ) }
          </section>
    </div>
  )
}

export default GroupLists