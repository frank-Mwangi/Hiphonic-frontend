import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const messageApi = createApi({
  reducerPath: "messageApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Messages"],
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: () => "allmessages",
      providesTags: ["Messages"],
    }),
    getMessagesBySenderID: builder.query({
      query: (SenderID) => `messages/${SenderID}`,
      providesTags: ["Messages"],
    }),

    getMessagesBySenderIDAndReceiverID: builder.query({
      query: (SenderIDAndReceiverID) =>
        `messages/both/${SenderIDAndReceiverID}`,
      providesTags: ["Messages"],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useGetMessagesBySenderIDQuery,
  useGetMessagesBySenderIDAndReceiverIDQuery,
} = messageApi;

export const useGetMessagesQueryWithoutCache = () =>
  useGetMessagesQuery({ refetchOnMountOrArgChange: true, cacheTime: 0 });