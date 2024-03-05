import Group from "./Group";
import { useGetAllNotificationsQuery } from "./notificationsApi";
import ClipLoader from "react-spinners/ClipLoader";


const NotificationLists = () => {
  const {
    data: notifications,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetAllNotificationsQuery({ refetchOnReconnect: true });
  console.log(
    `Notification: ${notifications}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
  );
  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={150} />;
  }
  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }

 
  return (
    <div className="notificationsList">
      <section className="notifications-container">
        {notifications &&
          notifications.map((notification, index) => <Group key={index} group={group} />)}
        <RecentActivity groups={groups} />
      </section>
    </div>
  );
};

export default GroupLists;