import ClipLoader from "react-spinners/ClipLoader";
import { useGetPhotosByUserIDQuery } from "./photoApi";
import { useState } from "react";
import "./photoLists.scss"

const PhotoLists = () => {
    const user = JSON.parse(localStorage.getItem("userDetails"))
  const {
    data: photos,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPhotosByUserIDQuery(user.UserID);

  console.log(`photos: ${photos},
    error: ${error},
    isLoading: ${isLoading},
    isError: ${isError},
    isFetching :${isFetching},`)

  const [selectedPhotoId, setSelectedPhotoId] = useState(null);

  const handlePhotoClick = (PhotoID) => {
    setSelectedPhotoId(PhotoID);
  };

  const closeModal = () => {
    setSelectedPhotoId(null);
  };

  if (isLoading || isFetching) {
    return <ClipLoader color="#000" loading={true} size={100} />;
  }

  if (isError) {
    return <div>Error: {error.data.message}</div>;
  }

  return (
    <div className="photosList">
      <section className="photo-container">
        {Array.isArray(photos) &&
          photos.map((photo, index) => (
            <div key={index} onClick={() => handlePhotoClick(photo.PhotoID)}>
                {console.log("photo.url", photo.PhotoURL)}
              <img src={photo.PhotoURL} alt={`Photo ${index}`} />
            </div>
          ))}
      </section>
      {selectedPhotoId && (
        <div className="modal">
          <img src={photos.find(photo => photo.PhotoID === selectedPhotoId)?.PhotoURL} alt="Selected Photo" />
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PhotoLists;













// import ClipLoader from "react-spinners/ClipLoader";
// import { useGetPhotosQuery } from "./photoApi"; // Corrected import
// import { useState } from "react";
// import Photos from "../../pages/Photos";

// const PhotoLists = () => {
//   const {
//     data: photos,
//     error,
//     isLoading,
//     isError,
//     isFetching,
//   } = useGetPhotosQuery({ refetchOnReconnect: true });

//   // const response = useGetPostsQuery();
//   console.log("Response ni: ", photos);
//   console.log(
//     `Photos: ${photos}, Error: ${error}, isLoading: ${isLoading}, isError: ${isError}, isFetching: ${isFetching}`
//   );

//   if (isLoading || isFetching) {
//     return <ClipLoader color="#000" loading={true} size={100} />;
//   }

//   if (isError) {
//     return <div>Error: {error.data.message}</div>;
//   }

//   return (
//     <div className="photosList">
//       <section className="photo-container">
//         {Array.isArray(photos) &&
//           photos.map((photo, index) => <Photos key={index} photos={photo} />)}
//       </section>
//     </div>
//   );
// };

// export default PhotoLists;
