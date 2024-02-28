import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const friendsApi = createApi({
  reducerPath: "friendApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["friendships"],
  endpoints: (builder) => ({
    getFriends: builder.query({
      query: (UserID) => `friendship/friends/${UserID}`,
      providesTags: ["friendships"],
    }),
    addFriendship: builder.mutation({
      query: (friendship) => ({
        url: "friendships",
        method: "POST",
        body: friendship,
      }),
      invalidatesTags: ["friendships"],
    }),

    deleteFriendship: builder.mutation({
      query: (FriendshipID) => ({
        url: `friendships/${FriendshipID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["friendships"],
    }),
  }),
});

export const {
  useGetFriendsQuery,
  useAddFriendshipMutation,
  useDeleteFriendshipMutation,
} = friendsApi;
