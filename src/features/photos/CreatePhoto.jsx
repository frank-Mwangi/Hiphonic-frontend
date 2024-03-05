import { useAddPhotoMutation } from "./photoApi";

const CreatePhoto = () => {
  const [addPhoto, { isLoading }] = useAddPhotoMutation();

  const user = JSON.parse(localStorage.getItem("userDetails"));
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      alert("Add a photoURL");
    } else {
      const response = await addPhoto({
        UserID: user.UserID,
        PhotoURL: e.target[0].value,
        UploadDate: new Date(),
      }).unwrap();
      console.log(response);
      e.target.reset();
    }
  };
  return (
    <section>
      <div className="createGroupPage">
        <form onSubmit={handleSubmit} className="form">
          <label className="form-input" htmlFor="PhotoURL">
            Photo-url:
            <textarea id="photoContent" name="photoContent" />
          </label>
          <button type="submit">{isLoading ? "Loading" : "Save Photo"}</button>
        </form>
      </div>
    </section>
  );
};

export default CreatePhoto;
