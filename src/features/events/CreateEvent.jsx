import { useCreateEventMutation } from "./eventsApi";
import "./createEvent.scss";
import { ErrorToast, ToasterContainer } from "../../components/Toaster";

const CreateEvent = ({ setShowForm }) => {
  console.log("Modal reached!!!!!");
  const [createEvent, { isLoading }] = useCreateEventMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.value === "") {
      ErrorToast("Event details cannot be blank");
    } else {
      createEvent({
        EventName: e.target[0].value,
        Description: e.target[1].value,
        EventDate: e.target[2].value,
        Location: e.target[3].value,
        EventPosterURL: e.target[4].value,
      });
      e.target.reset();
      setShowForm((prevState) => !prevState);
    }
  };
  return (
    <section className="create-event">
      <ToasterContainer />
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="form-input" htmlFor="EventName">
          Event Name:
          <textarea id="EventName" name="EventName" />
        </label>
        <label className="form-input" htmlFor="Description">
          Description:
          <textarea id="Description" name="Description" />
        </label>
        <label className="form-input" htmlFor="EventDate">
          Event Date:
          <textarea id="EventDate" name="EventDate" />
        </label>
        <label className="form-input" htmlFor="Location">
          Location:
          <textarea id="Location" name="Location" />
        </label>
        <label className="form-input" htmlFor="EventPosterURL">
          Event Poster URL:
          <textarea id="EventPosterURL" name="EventPosterURL" />
        </label>
        <button type="submit">{isLoading ? "Loading" : "Save Event"}</button>
      </form>
    </section>
  );
};

export default CreateEvent;
