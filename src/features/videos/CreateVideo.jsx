import { useUploadVideoMutation } from "./videosApi";
import "./createVideo.scss";
import { ErrorToast, SuccessToast } from "../../components/Toaster";
// import { useState } from "react";

const CreateVideo = ({ closeModal }) => {
  const [uploadVideo, { isLoading }] = useUploadVideoMutation();
  //const [openModal, setOpenModal] = useState(true);

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "" || e.target[1].value === "") {
      alert("Video details cannot be blank");
    } else {
      try {
        const response = await uploadVideo({
          UserID: user.UserID,
          VideoURL: e.target[0].value,
          Category: e.target[1].value,
          UploadDate: new Date().toISOString().split("T")[0],
        }).unwrap();
        e.target.reset();
        console.log(response.message);
        SuccessToast(response.message);
      } catch (error) {
        console.log("Error uploading video: ", error);
        ErrorToast(error);
      }
    }
  };
  return (
    <section className="create-video">
      <div className="videos">
        <div className="form-title">
          <h2>Add a New Video</h2>
          <button onClick={closeModal}>X</button>
        </div>

        <form onSubmit={handleSubmit} className="form">
          <label className="form-input" htmlFor="VideoURL">
            Video URL:
            <textarea id="VideoURL" name="VideoURL" />
          </label>
          <label className="form-input" htmlFor="Category">
            Category:
            <textarea id="Category" name="Category" />
          </label>

          <button type="submit">{isLoading ? "Loading" : "Save Video"}</button>
        </form>
      </div>
    </section>
  );
};

export default CreateVideo;
