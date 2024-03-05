import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: "eventsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Events"],
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => "events/allevents",
      providesTags: ["Events"],
    }),
    getEventByID: builder.query({
      query: () => "events/:EventID",
      providesTags: ["Events"],
    }),
    getEventAttendedByUserID: builder.query({
      query: (UserID) => `eventattendees/${UserID}`,
      providesTags: ["Events"],
    }),
    getAttendeesOfEvent: builder.query({
      query: (EventID) => `eventattendees/${EventID}/all`,
      providesTags: ["Events"],
    }),
    createEvent: builder.mutation({
      query: (event) => ({
        url: "events",
        method: "POST",
        body: event,
      }),
      invalidatesTags: ["Events"],
    }),
    registerForEvent: builder.mutation({
      query: (eventToAttend) => ({
        url: "eventattendees",
        method: "POST",
        body: eventToAttend,
      }),
      invalidatesTags: ["Events"],
    }),
    updateEvent: builder.mutation({
      query: (event) => ({
        url: `events/update/:${event.EventID}`,
        method: "PUT",
        body: event,
      }),
      invalidatesTags: ["Events"],
    }),
    optOutOfEvent: builder.mutation({
      query: (EventID, UserID) => ({
        url: `${EventID}/${UserID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
    deleteEvent: builder.mutation({
      query: (EventID) => ({
        url: `/events/${EventID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetEventsQuery,
  useGetEventByIDQuery,
  useGetEventAttendedByUserIDQuery,
  useGetAttendeesOfEventQuery,
  useCreateEventMutation,
  useRegisterForEventMutation,
  useUpdateEventMutation,
  useOptOutOfEventMutation,
  useDeleteEventMutation,
} = eventsApi;
