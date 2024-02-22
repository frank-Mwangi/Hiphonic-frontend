import photo1 from "../assets/pic7.png";
import photo2 from "../assets/pic2.png";
import photo3 from "../assets/pic3.png";
import photo4 from "../assets/pic4.png";
import photo5 from "../assets/pic5.png";
import photo6 from "../assets/pic6.png";
import photo7 from "../assets/pic7.png";
import photo8 from "../assets/pic8.png";
import photo9 from "../assets/pic9.png";
import photo10 from "../assets/pic10.png";
import photo11 from "../assets/pic11.png";
import photo12 from "../assets/pic12.png";
import "./gallery.scss";

const Gallery = () => {
  const pics = [
    {
      img: photo1,
    },
    {
      img: photo2,
    },
    {
      img: photo3,
    },
    {
      img: photo4,
    },
    {
      img: photo5,
    },
    {
      img: photo6,
    },
    {
      img: photo7,
    },
    {
      img: photo8,
    },
    {
      img: photo9,
    },
    {
      img: photo10,
    },
    {
      img: photo11,
    },
    {
      img: photo12,
    },
  ];

  return (
    <div className="photos">
      {pics &&
        pics.map((pic, index) => {
          return (
            <div className="photo" key={index}>
              <img src={pic.img} alt="no-pic" />
            </div>
          );
        })}
    </div>
  );
};

export default Gallery;
