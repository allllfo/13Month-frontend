import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";

import storage from "redux-persist/lib/storage/session";
import { persistReducer, persistStore, PURGE, PERSIST } from "redux-persist";

const rootReducer = combineReducers({
  user13th: userReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["user13th"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PURGE],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
