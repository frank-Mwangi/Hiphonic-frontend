import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../features/register/userApi.js";
import { postsApi } from "../features/posts/postApi.js";
import { friendsApi } from "../features/friends/friendsApi.js";
import { groupsApi } from "../features/groups/groupsApi.js";
import { groupMembersApi } from "../features/groupMembers/groupMembersApi.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
    [groupsApi.reducerPath]: groupsApi.reducer,
    [groupMembersApi.reducerPath]: groupMembersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      friendsApi.middleware,
      groupsApi.middleware,
      groupMembersApi.middleware
    ),
});

setupListeners(store.dispatch);
