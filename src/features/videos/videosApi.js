import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
  reducerPath: "videosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Videos"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "videos",
      providesTags: ["Videos"],
    }),
    getVideoByID: builder.query({
      query: (VideoID) => `videos/${VideoID}`,
      providesTags: ["Videos"],
    }),
    getVideosUploadedByUser: builder.query({
      query: (UserID) => `videos/user/${UserID}
        `,
      providesTags: ["Videos"],
    }),
    uploadVideo: builder.mutation({
      query: (video) => ({
        url: "videos",
        method: "POST",
        body: video,
      }),
      invalidatesTags: ["Videos"],
    }),
    deleteVideo: builder.mutation({
      query: (VideoID) => ({
        url: `videos/delete/${VideoID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoByIDQuery,
  useGetVideosUploadedByUserQuery,
  useUploadVideoMutation,
  useDeleteVideoMutation,
} = videosApi;
