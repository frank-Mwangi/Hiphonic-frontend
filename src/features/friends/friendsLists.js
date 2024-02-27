import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsApi = createApi({
  reducerPath: "friendsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Friends"],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: () => ({
        url: "friends",
      }),
      providesTags: ["Friends"],
    }),
    addPost: builder.mutation({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: (post) => ({
        url: `posts/update/${post.PostID}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (PostID) => ({
        url: `posts/delete/${PostID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;
