import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ImageItem {
    id: number;
    url: string;
    comment: string;
}

interface GalleryState {
    items: ImageItem[];
    imageUrl: string;
    comment: string;
}

const initialState: GalleryState = {
    items: [],
    imageUrl: "",
    comment: ""
};

const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<ImageItem[]>) => {
            state.items = action.payload;
        },
        setImageUrl: (state, action: PayloadAction<string>) => {
            state.imageUrl = action.payload;
        },
        setComment: (state, action: PayloadAction<string>) => {
            state.comment = action.payload;
        },
        addItem: (state) => {
            const lastId = state.items.length > 0 ? state.items[state.items.length - 1].id : 0;
            state.items.push({
                id: lastId + 1,
                url: state.imageUrl,
                comment: state.comment
            });
            state.imageUrl = "";
            state.comment = "";
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateComment: (state, action: PayloadAction<{ id: number; comment: string }>) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                item.comment = action.payload.comment;
            }
        }
    }
});

export const { setItems, setImageUrl, setComment, addItem, removeItem, updateComment } = gallerySlice.actions;
export default gallerySlice.reducer;
