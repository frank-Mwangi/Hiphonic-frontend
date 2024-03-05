import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users/allusers",
      providesTags: ["Users"],
    }),
    getUser: builder.query({
      query: (UserID) => `users/${UserID}`,
      providesTags: ["Users"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    authenticateUser: builder.mutation({
      query: (user) => ({
        url: "users/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `users/update/${user.UserID}`,
        method: "PUT",
        body: user,
        headers: {
          authorization: `JWT ${user.token}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: builder.mutation({
      query: (UserID) => ({
        url: `user/${UserID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useAuthenticateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
