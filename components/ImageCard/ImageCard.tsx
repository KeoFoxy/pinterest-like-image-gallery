
import { ImageCardProps } from "@/components/ImageCard/ImageCard.props";
import {Commentary, ImageComponent} from "@/components";
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { updateComment } from '../Gallery/Gallery.slice';


const ImageCard = ( {imageUrl, comment, id, onRemove}: ImageCardProps) => {
    const dispatch = useDispatch();

    const handleUpdateComment = (newComment: string) => {
        dispatch(updateComment({ id, comment: newComment }));
    };

    return (
        <div className="w-60 mt-10 mx-auto bg-white rounded-xl shadow-md overflow-hidden relative">
            <button
                className="absolute top-3 right-3 text-white rounded hover:bg-gray-300 focus:outline-none"
                onClick={() => onRemove(id)}
            >
                <DeleteIcon fontSize="small" />
            </button>
            <ImageComponent imageUrl={imageUrl} />
            <Commentary text={comment} onUpdate={handleUpdateComment} />
        </div>
    );
};

export default ImageCard;