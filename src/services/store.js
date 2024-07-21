import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article.js"; 

export const store = configureStore({
  reducer: {[articleApi.reducerPath]: articleApi.reducer},
  middleware: (getDefaultMiddleare) => getDefaultMiddleare().concat(articleApi.middleware)
});
