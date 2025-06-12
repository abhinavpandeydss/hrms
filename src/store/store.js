import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";
import uiSlice from "./slices/uiSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    auth: authSlice,
    ui: uiSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: ["persist/PERSIST"],
      },
    }),
});
