import {
  SuccessToast,
  ErrorToast,
  ToasterContainer,
  LoadingToast,
} from "../../components/Toaster";
import { useUpdatePostMutation } from "./postApi";
import "./editPost.scss";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "../../validators/postValidators";

const EditPost = ({ handleEdit, post }) => {
  const [updatePost, { isLoading }] = useUpdatePostMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(postSchema),
    defaultValues: {
      Content: post.Content,
    },
  });

  const onSubmit = async (data) => {
    try {
      LoadingToast();
      const response = await updatePost({
        PostID: post.PostID,
        ...data,
        UserID: post.UserID,
      }).unwrap();
      SuccessToast(response.message);
    } catch (error) {
      ErrorToast("Error updating post: " + error);
    }
    LoadingToast(false);
    reset();
  };
  //   const handleClose = () => {
  //     setShowModal(false);
  //   };

  return (
    <div className="layout">
      <ToasterContainer />
      <div className="modal">
        <div className="header">
          <div>Post Update Form</div>
          <button onClick={handleEdit}>X</button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label className="form-input" htmlFor="Content">
            Content:
            <textarea id="Content" {...register("Content")} />
          </label>
          {errors.Content && (
            <p className="error-msg">{errors.Content.message}</p>
          )}
          <button type="submit">{isLoading ? "Loading" : "Save Post"}</button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;

// const EditPost = ({ post }) => {
//   const user = JSON.parse(localStorage.getItem("userDetails"));
//   const [updatePost, { isLoading }] = useUpdatePostMutation();
//   const handleSubmit = async (e) => {
//     LoadingToast();
//     e.preventDefault();
//     if (e.target[0].value === "") {
//       ErrorToast("Post cannot be blank");
//     } else {
//       try {
//         const response = await updatePost({
//           UserID: user.UserID,
//           Content: e.target[0].value,
//         }).unwrap();
//         console.log(response);
//         SuccessToast(response.message);
//         e.target.reset();
//       } catch (error) {
//         console.error("Failed to edit post:", error);
//         ErrorToast(error);
//       }
//     }
//   };

//   if (isLoading) {
//     return LoadingToast();
//   }

//   // const [addPost, { isLoading }] = useAddPostMutation();

//   // const handleSubmit = ( e ) =>
//   // {
//   //     LoadingToast();
//   //   e.preventDefault();
//   //   if (e.target[0].value === "") {
//   //     ErrorToast("Post cannot be blank");
//   //   } else {
//   //     addPost({
//   //       post_content: e.target[0].value,
//   //     }).unwrap();
//   //     e.target.reset();
//   //   }
//   // };
//   return (
//     <section className="edit-post">
//       <ToasterContainer />
//       <h2>Edit a Post</h2>
//       <form onSubmit={handleSubmit} className="form">
//         <label className="form-input" htmlFor="postContent">
//           Content:
//           <textarea id="postContent" name="postContent" value={name} />
//         </label>
//         <button type="submit">{isLoading ? "Loading" : "Save Post"}</button>
//       </form>
//     </section>
//   );
// };

// export default EditPost;
