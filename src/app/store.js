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

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      friendsApi.middleware,
      eventsApi.middleware,
      videosApi.middleware
    ),
});

setupListeners(store.dispatch);
