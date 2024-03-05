import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts/all",
      providesTags: ["Posts"],
    }),
    getPostsByUser: builder.query({
      query: (UserID) => `posts/user/${UserID}`,
      providesTags: ["Posts"],
    }),
    getPostsByID: builder.query({
      query: (PostID) => `posts/${PostID}`,
      providesTags: ["Posts"],
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
  useGetPostsByUserQuery,
  useGetPostsByIDQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postsApi;

export const useGetPostsQueryWithoutCache = () =>
  useGetPostsQuery({ refetchOnMountOrArgChange: true, cacheTime: 0 });
