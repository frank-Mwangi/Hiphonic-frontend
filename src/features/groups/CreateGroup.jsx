import { useAddGroupMutation, useGetGroupsQuery } from "./groupsApi";


const CreateGroup = () => {
  const [addGroup, { isLoading }] = useAddGroupMutation();
  const [getGroups] = useAddGroupMutation();

      const {
        data: groups,
        error,
       isError,
        isFetching,
      } = useGetGroupsQuery({ refetchOnReconnect: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert(" group cannot be blank");
    } else {
      console.log(e.target[0].value);
      const createdGroup = await addGroup({
        GroupName: e.target[0].value,
        Description: e.target[0].value,
      });
      const { message } = createdGroup.data;

      if (message) {
        console.log("call groups");
         console.log(
           `Groups: ${groups}`
        );
        if ( groups )
        {
        console.log(groups.length)
          groups.forEach(element => {
            console.log(element)
          });
        }

        
      }

      // e.target.reset();
    }
  };
  return (
    <div>
      <section>
        <h2>Add a New Group</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="form-input" htmlFor="groupName">
            GroupName:
            <textarea id="postContent" name="postContent" />
          </label>
          <label className="form-input" htmlFor="description">
            Description:
            <textarea id="postContent" name="postContent" />
          </label>
          <button type="submit">{isLoading ? "Loading" : "Save Post"}</button>
        </form>
      </section>
    </div>
  );
};

export default CreateGroup;
