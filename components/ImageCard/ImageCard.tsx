
import { ImageCardProps } from "@/components/ImageCard/ImageCard.props";
import {Commentary, ImageComponent} from "@/components";
import DeleteIcon from '@mui/icons-material/Delete';

const ImageCard = ( {imageUrl, comment, id, onRemove}: ImageCardProps) => {

    return (
        <div className="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden relative">
            <button
                className="absolute top-3 right-3 text-white rounded hover:bg-gray-300 focus:outline-none"
                onClick={() => onRemove(id)}
            >
                <DeleteIcon fontSize="small" />
            </button>
            <ImageComponent imageUrl={imageUrl} />
            <Commentary text={comment} />
        </div>
    );
};

export default ImageCard;