import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "../features/register/userApi.js";
import { postsApi } from "../features/posts/postApi.js";
import { friendsApi } from "../features/friends/friendsApi.js";
<<<<<<< Updated upstream
import { eventsApi } from "../features/events/eventsApi.js";
import { videosApi } from "../features/videos/videosApi.js";
=======
import { photoApi } from "../features/photos/photoApi.js";
>>>>>>> Stashed changes

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [userApi.reducerPath]: userApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [friendsApi.reducerPath]: friendsApi.reducer,
<<<<<<< Updated upstream
    [eventsApi.reducerPath]: eventsApi.reducer,
    [videosApi.reducerPath]: videosApi.reducer,
=======
    [photoApi.reducerPath]: photoApi.reducer,
>>>>>>> Stashed changes
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      postsApi.middleware,
      friendsApi.middleware,
<<<<<<< Updated upstream
      eventsApi.middleware,
      videosApi.middleware
=======
      photoApi.middleware,
>>>>>>> Stashed changes
    ),
});

setupListeners(store.dispatch);
