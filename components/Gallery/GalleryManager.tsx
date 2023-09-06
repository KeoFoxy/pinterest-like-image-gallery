import { Gallery } from "@/components";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, setImageUrl, setComment, setItems } from './Gallery.slice';
import { RootState, loadFromLocalStorage } from "@/stateManager/store";
import { useEffect } from "react";
import useIsClient from "@/Utils/IsClient";

const GalleryManager = () => {
    const dispatch = useDispatch();
    const galleryItems = useSelector((state: RootState) => state.gallery.items);
    const imageUrl = useSelector((state: RootState) => state.gallery.imageUrl);
    const comment = useSelector((state: RootState) => state.gallery.comment);
    const isClient = useIsClient();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setImageUrl(event.target.value));
    };

    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setComment(event.target.value));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && imageUrl.trim() !== '' && comment.trim() !== '') {
            dispatch(addItem());
        }
    };

    const handleRemoveImage = (idToRemove: number) => {
        dispatch(removeItem(idToRemove));
    }

    useEffect(() => {
        if (isClient) {
            const initialState = loadFromLocalStorage();
            if (initialState && initialState.gallery) {
                dispatch(setItems(initialState.gallery.items));
            }
        }
    }, [isClient]);

    if (!isClient) {
        return <div>Loading...</div>; // заглушка на серверной стороне
    }

    return (
        <div className="bg-gray-200">
            <div className="container mx-auto p-4">
                <input type="text"
                       value={imageUrl}
                       onChange={handleInputChange}
                       onKeyDown={handleKeyDown}
                       className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Add image URL" />

                <input type="text"
                       value={comment}
                       onChange={handleCommentChange}
                       onKeyDown={handleKeyDown}
                       className="bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Add comment" />
            </div>
            <Gallery items={galleryItems} onRemove={handleRemoveImage} />
        </div>
    );
};

export default GalleryManager;
