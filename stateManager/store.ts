import { configureStore } from "@reduxjs/toolkit";
import galleryReducer from "../components/Gallery/Gallery.slice";

export function loadFromLocalStorage() {
    if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem('galleryState');
        if (savedState) {
            return JSON.parse(savedState);
        }
    }
    return undefined;
}

export function saveToLocalStorage(state: any) {
    if (typeof window !== 'undefined') {
        localStorage.setItem('galleryState', JSON.stringify(state));
    }
}

const loadedState = loadFromLocalStorage();
const initialState = loadedState ? { gallery: loadedState } : undefined;
console.log("Исходное состояние из localStorage:", initialState);

const store = configureStore({
    reducer: {
        gallery: galleryReducer
    },
    preloadedState: initialState
});

store.subscribe(() => {
    saveToLocalStorage(store.getState().gallery);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
