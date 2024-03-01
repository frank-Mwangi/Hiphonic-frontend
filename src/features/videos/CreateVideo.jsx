import { useUploadVideoMutation } from "./videosApi";

const CreateEvent = () => {
  const [uploadVideo, { isLoading }] = useUploadVideoMutation();
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Video details cannot be blank");
    } else {
      uploadVideo({
        UserID: user.UserID,
        VideoURL: e.target[0].value,
        Category: e.target[1].value,
        UploadDate: new Date(),
      });
      e.target.reset();
    }
  };
  return (
    <section>
      <h2>Add a New Video</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="VideoURL">
          Video URL:
          <textarea id="VideoURL" name="VideoURL" />
        </label>
        <label className="form-input" htmlFor="Category">
          Category:
          <textarea id="Category" name="Category" />
        </label>

        <button type="submit">{isLoading ? "Loading" : "Save Event"}</button>
      </form>
    </section>
  );
};

export default CreateEvent;
