import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 
export const notificationApi=createApi({
    reducerPath: "notificationApi",
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5400/api/'}),
    tagTypes: ['Notifications'],
    endpoints: (builder)=>({
 
        getAllNotifications:builder.query({
            query:()=> 'notifications/all',
            providesTags: ['Notifications']
        }),
 
        getNotificationByUserID:builder.query({
            query:(userID)=> `notifications/ByUserID/${userID}`,
            providesTags: ['Notifications']
        })
    })
})
 
export const {useGetAllNotificationsQuery,useGetNotificationByUserIDQuery}=notificationApi