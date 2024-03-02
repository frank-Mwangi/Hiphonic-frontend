import React from 'react'
import "./photo.scss"
import { useDeletePhotoMutation } from './photoApi';


const Photo = ({photo, all}) => {
  const user = JSON.parse(localStorage.getItem("userDetails"))
    const [deletePhoto, { isDeleting}] = useDeletePhotoMutation();

  const handleDelete = async() =>{
    const response = await deletePhoto(photo.PhotoID).unwrap();
    console.log(response)

  }
  return (
    <div className='photoPage'>
       {console.log("photo.url", photo.PhotoURL)}
        <img src={photo.PhotoURL} />
        {(!all) &&
        (<button onClick={handleDelete}>
          {isDeleting ? 
          "Deleting" : "Delete"}
          </button>)}
    </div>
  )
}

export default Photo