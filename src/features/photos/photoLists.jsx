import ClipLoader from "react-spinners/ClipLoader";
import { useGetPhotosByUserIDQuery, useAddPhotoMutation, useGetPhotosQuery } from "./photoApi";
import { useState } from "react";
import "./photoLists.scss"
import Photo from "./Photo";
import dots from "../../assets/horizontal-dots.png"
import CreatePhoto from "./CreatePhoto";


const PhotoLists = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"))
  const [showAddPhotoOption, setShowAddPhotoOption] = useState(false);
  const [photoUrl, setPhotoUrl] = useState("");
  const handleAddPhoto = async () => {
    try {
      // Perform validation on photoUrl if needed

      // Call the addPhoto mutation
      await addPhoto({photoUrl: PhotoURL, UserID: UserID });

      // Clear the input field and hide the "Add Photo" option
      setPhotoUrl("");
      setShowAddPhotoOption(false);
    } catch (error) {
      console.error("Error adding photo:", error);
      // Handle error
    }
  };

  const [addPhoto] = useAddPhotoMutation();
  const [all, setAll] = useState(true)
  
  const {
    data: yourPhotos,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetPhotosByUserIDQuery(user.UserID);

  const {
    data: allPhotos,
    error:failed,
    isLoading:inaFetch,
    isError:isFailing,
  } = useGetPhotosQuery();


  // console.log(`photos: ${photos},
  //   error: ${error},
  //   isLoading: ${isLoading},
  //   isError: ${isError},
  //   isFetching :${isFetching},`)

  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  const handleShowYourPhotos = () => {
    setAll(false)
  }
  const handleShowAllPhotos= () =>{
    setAll(true)
  }


  if (isLoading || isFetching || inaFetch) {
    return <ClipLoader color="#000" loading={true} size={100} />;
  }

  if (isError ) {
    return <div>Error: {error.data.message}</div>;
  }
  if (isFailing){
    return <div>Error: {failed.data.message}</div>
  }

  return (
    <div className="photosList">
      <div className="head">
        <div className="lefthead">
          <div className="top">
            <h1>Photos</h1>
            <span onClick={() => setShowAddPhotoOption(!showAddPhotoOption)}>
              <img src={dots} alt="dots" />
            </span>
          </div>
          <div className="mid">
            <span onClick={handleShowAllPhotos}>All Photos</span>
            <span onClick={handleShowYourPhotos}>Your Photos</span>
            <span>Albums</span>
          </div>
          <div className="bottom">
            <h4>{`${allPhotos.length} Total Photos`}</h4>
            <p>{
              
              `${yourPhotos.length} Total Photos About You`
            }
            </p>
          </div>
        </div>
        {showAddPhotoOption && (
          <CreatePhoto />         
        )}
      </div>
      <section className="photo-container">
        {all ? (allPhotos  && 
        [...allPhotos].sort((a, b) => b.PhotoID - a.PhotoID).map((photo, index) => (
          <Photo key={index} photo={photo} all={true}/>
        ) )): (yourPhotos &&
        [...yourPhotos].sort((a, b) => b.PhotoID - a.PhotoID).map((photo, index) => (
          <Photo key={index} photo={photo} all={false}/>
       
          )))}
      </section>

      
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
