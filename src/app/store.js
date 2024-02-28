import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../features/register/userApi.js";
import { postsApi } from "../features/posts/postApi.js";
import { friendsApi } from "../features/friends/friendsApi.js";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      friendsApi.middleware
    ),
});

setupListeners(store.dispatch);
