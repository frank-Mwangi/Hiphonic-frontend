import ClipLoader from "react-spinners/ClipLoader";
import { useGetUsersQuery } from "./friendsApi";
import AllUsers from "./AllUsers";

const UsersList = () => {
  const {
    data: users,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetUsersQuery();

  return (
    <div>
      {isError && <div>Error: {error.data}</div>}
      {isLoading ||
        (isFetching && <ClipLoader color="#000" loading={true} size={150} />)}
      <div className="suggested-friends-title">
        <h2>People You Might Know</h2>
      </div>
      <section className="user-container">
        {users &&
          users.map((user) => <AllUsers key={user.UserID} user={user} />)}
      </section>
    </div>
  );
};

export default UsersList;
