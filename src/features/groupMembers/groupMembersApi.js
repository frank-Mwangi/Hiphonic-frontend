import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//defining a service using a base url and expected endpoints

export const groupMembersApi = createApi({
  reducerPath: "groupMembersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5400/api/" }),
  tagTypes: ["GroupMembers"],
  endpoints: (builder) => ({
    getGroupMembers: builder.query({
      query: () => `groupmembers/:MemberID/ ${MemberID}`,
    }),
    getAllGroupMembers: builder.query({
      query: (GroupID) => `groupmembers/all/${GroupID}`,
    }),

    addGroupMember: builder.mutation({
      query: (groupmember) => ({
        url: "groupmembers",
        method: "POST",
        body: groupmember,
      }),
      invalidatesTags: ["GroupMembers"],
    }),

    updateGroup: builder.mutation({
      query: (GroupID) => ({
        url: `groups/update/${GroupID}`,
        method: "PUT",
      }),
      invalidatesTags: ["Groups"],
    }),
    deleteGroupMember: builder.mutation({
      query: (GroupID, MemberID) => ({
        url: `groupmembers/${GroupID}/${MemberID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Groups"],
    }),
  }),
});

export const {
  useGetGroupMembersQuery,
  useGetAllGroupMembersQuery,
  useAddGroupMemberMutation,
  useUpdateGroupMutation,
  useDeleteGroupMemberMutation,
} = groupMembersApi;
