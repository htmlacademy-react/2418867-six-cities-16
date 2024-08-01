import { combineReducers, configureStore } from '@reduxjs/toolkit';
import flatSlice from './slice';
import { postAPI } from '../services/post-service';

const rootReducer = combineReducers({
  flatSlice,
  [postAPI.reducerPath]: postAPI.reducer,
});

export const store = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(postAPI.middleware),
  });

type RootState = ReturnType<typeof rootReducer>;
type ApppStore = ReturnType<typeof store>;
type AppDispath = ApppStore['dispatch'];

export type { RootState, AppDispath, ApppStore };
