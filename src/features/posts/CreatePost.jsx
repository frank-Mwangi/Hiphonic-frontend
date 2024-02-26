import { useAddPostMutation } from "./postApi";
const CreatePost = () => {
  const [addPost, { isLoading }] = useAddPostMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert("Post cannot be blank");
    } else {
      addPost({
        post_content: e.target[0].value,
      });
      e.target.reset();
    }
  };
  return (
    <section>
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
