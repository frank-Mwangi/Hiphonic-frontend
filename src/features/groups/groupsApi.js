import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//defining a service using a base url and expected endpoints

export const groupsApi = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["Groups"],
  endpoints: (builder) => ({
    getGroups: builder.query({
      query: () => `groups/allgroups`,
      providesTags: ['Groups']
    }),

    addGroup: builder.mutation({
      query: (group) => ({
        url: "groups",
        method: "POST",
        body: group,
      }),

      invalidatesTags: ["Groups"],
    }),
      getGroup: builder.query({
      query: (GroupID) => `groups/${GroupID}`,
      providesTags: ["Groups"],
    }),
     

    updateGroup: builder.mutation({
      query: (GroupID) => ({
        url: `groups/update/${GroupID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Groups"],
    }),
    deleteGroup: builder.mutation({
      query: (GroupID) => ({
        url: `groups/delete/${GroupID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Groups"],
    }),
  }),
});

export const {
  useGetGroupsQuery,
  useGetGroupQuery,
    useAddGroupMutation,
    useUpdateGroupMutation,
    useDeleteGroupMutation,
} = groupsApi


