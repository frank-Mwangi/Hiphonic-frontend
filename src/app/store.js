import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../features/register/userApi.js";
import { postsApi } from "../features/posts/postApi.js";
import { friendsApi } from "../features/friends/friendsApi.js";
import { groupsApi } from "../features/groups/groupsApi.js";
import { groupMembersApi } from "../features/groupMembers/groupMembersApi.js";
import { eventsApi } from "../features/events/eventsApi.js";
import { videosApi } from "../features/videos/videosApi.js";
import { photoApi } from "../features/photos/photoApi.js";
import { commentApi } from "../features/comments/commentApi.js";
import { messageApi } from "../features/messages/messageApi.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
    [photoApi.reducerPath]: photoApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [groupMembersApi.reducerPath]: groupMembersApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [messageApi.reducerPath]: messageApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      friendsApi.middleware,
      eventsApi.middleware,
      videosApi.middleware,
      photoApi.middleware,
      groupsApi.middleware,
      groupMembersApi.middleware,
      commentApi.middleware,
      messageApi.middleware,
    ),
});

setupListeners(store.dispatch);
