import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
  reducerPath: "commentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getPostComments: builder.query({
      query: (PostID) => `comments/post/${PostID}`,
      providesTags: ["Comments"],
    }),
    createComment: builder.mutation({
      query: (newComment) => ({
        url: "comments",
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateComment: builder.mutation({
      query: (comment) => ({
        url: `comments/update/${comment.CommentID}`,
        method: "PUT",
        body: comment,
      }),
      invalidatesTags: ["Comments"],
    }),
    deleteComment: builder.mutation({
      query: (CommentID) => ({
        url: `comments/delete/${CommentID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostCommentsQuery,
  useCreateCommentMutation,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
