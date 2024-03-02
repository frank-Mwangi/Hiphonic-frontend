import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const photoApi = createApi({
  reducerPath: "photoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Photos"],
  endpoints: (builder) => ({
    getPhotos: builder.query({
      query: () => "photos/allphotos",
      providesTags: ["Photos"],
    }),
    getPhotosByUserID: builder.query({
      query: (UserID) => `photos/yours/${UserID}`,
      providesTags: ["Photos"]
    }),
    addPhoto: builder.mutation({
      query: (newPhoto) => ({
        url: "photos",
        method: "POST",
        body: newPhoto,
      }),
      invalidatesTags: ["Photos"], 
    }),
    deletePhoto: builder.mutation({
      query: (PhotoID) => ({
        url: `photos/delete/${PhotoID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Photos"], 
    }),
  }),
});

export const {
  useGetPhotosQuery,
  useGetPhotosByUserIDQuery,
  useAddPhotoMutation,
  useDeletePhotoMutation,
} = photoApi;
