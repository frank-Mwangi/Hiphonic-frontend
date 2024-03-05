import { useAddGroupMutation, useGetGroupsQuery } from "./groupsApi";

import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  // LoadingToast,
} from "../../components/Toaster";
import "./CreateGroup.scss";

const CreateGroup = ({ onClose }) => {
  const [addGroup, { isLoading }] = useAddGroupMutation();
  //const [getGroups] = useAddGroupMutation();

  const {
    data: groups,
    error,
    isError,
    isFetching,
  } = useGetGroupsQuery({ refetchOnReconnect: true });

  const handleSubmit = async (e) => {
    // LoadingToast();
    e.preventDefault();
    if (e.target[0].value === "") {
      ErrorToast("Group name cannot be blank");
    } else {
      try {
        console.log(e.target[0].value);
        const createdGroup = await addGroup({
          GroupName: e.target[0].value,
          Description: e.target[0].value,
        }).unwrap();
        const { message } = createdGroup.data;

        LoadingToast(false);
        if (message) {
          console.log("Group added successfully");
          SuccessToast("Group added successfully");

          console.log(`Groups: ${groups}`);
          onClose();
          if (groups) {
            console.log(groups.length);
            groups.forEach((element) => {
              console.log(element);
            });
          }
        }
      } catch (error) {
        LoadingToast(false);
        console.error("Failed to add group:", error);
        //ErrorToast(error);
      }
    }
  };

  // const handleSubmit = async ( e ) =>
  // {
  //   LoadingToast();
  //   e.preventDefault();
  //   if (e.target[0].value === "") {
  //     ErrorToast(" group cannot be blank");
  //   } else {
  //     console.log(e.target[0].value);
  //     const createdGroup = await addGroup({
  //       GroupName: e.target[0].value,
  //       Description: e.target[0].value,
  //     }).unwrap();
  //     const { message } = createdGroup.data;

  //     if (message) {
  //       console.log("call groups");
  //       SuccessToast("Group added successfully");
  //       console.log(`Groups: ${groups}`);
  //       if (groups) {
  //         console.log(groups.length);
  //         groups.forEach((element) => {
  //           console.log(element);
  //         });
  //       }
  //     }

  //     // e.target.reset();
  //   }
  // };
  return (
    <div className="createGroupPage">
      <section>
        <ToasterContainer />
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
          <button type="submit">{isLoading ? "Loading" : "Save Group"}</button>
        </form>
      </section>
    </div>
  );
};

export default CreateGroup;
