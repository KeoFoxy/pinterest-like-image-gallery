import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "./slice";
import { loadFromLocalStorage, saveToLocalStorage } from "./helpers";

const initialState = loadFromLocalStorage()
    ? { gallery: loadFromLocalStorage() }
    : undefined;

const store = configureStore({
    reducer: {
        gallery: galleryReducer,
    },
    preloadedState: initialState,
});

store.subscribe(() => {
    saveToLocalStorage(store.getState().gallery);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
