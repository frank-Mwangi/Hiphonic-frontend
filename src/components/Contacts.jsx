import wade from "../assets/wade.png";
import jane from "../assets/jane.png";
import esther from "../assets/esther.png";
import cameron from "../assets/cameron.png";
import brooklyn from "../assets/Brooklyn.png";
import "./contacts.scss";

const Contacts = () => {
  const contacts = [
    {
      name: "Wade Warren",
      img: wade,
    },
    {
      name: "Jane Cooper",
      img: jane,
    },
    {
      name: "Esther Howard",
      img: esther,
    },
    {
      name: "Cameron Williamson",
      img: cameron,
    },
    {
      name: "Brooklyn Simmons",
      img: brooklyn,
    },
  ];
  return (
    <div className="contacts">
      <div className="title">
        <h1>CONTACTS</h1>
        <span>See all</span>
      </div>
      <div className="contact-list">
        {/* {console.log(contacts)} */}
        {contacts &&
          contacts.map((contact, index) => (
            <div className="contact" key={index}>
              <img src={contact.img} alt="no-pic" />
              <p>{contact.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Contacts;
