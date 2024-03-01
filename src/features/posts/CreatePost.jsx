import { useAddPostMutation } from "./postApi";
import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  LoadingToast,
} from "../../components/Toaster";


const CreatePost = () =>
{
   const [addPost, { isLoading }] = useAddPostMutation();
  const handleSubmit = (e) => {
    LoadingToast();
    e.preventDefault();
    if (e.target[0].value === "") {
      ErrorToast("Post cannot be blank");
    } else {
      addPost({
        post_content: e.target[0].value,
      })
        .unwrap()
        .then(() => {
         
          SuccessToast("Post added successfully");
          e.target.reset();
        })
        .catch((error) => {
          
          console.error("Failed to add post:", error);
          ErrorToast("Failed to add post. Please try again.");
        });
    }
  };

  // const [addPost, { isLoading }] = useAddPostMutation();

  // const handleSubmit = ( e ) =>
  // {
  //     LoadingToast();
  //   e.preventDefault();
  //   if (e.target[0].value === "") {
  //     ErrorToast("Post cannot be blank");
  //   } else {
  //     addPost({
  //       post_content: e.target[0].value,
  //     }).unwrap();
  //     e.target.reset();
  //   }
  // };
  return (
    <section>
      <ToasterContainer />
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="postContent">
          Content:
          <textarea id="postContent" name="postContent" />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save Post"}</button>
      </form>
    </section>
  );
};

export default CreatePost;
