
import { ImageCardProps } from "@/components/ImageCard/ImageCard.props";
import {Commentary, ImageComponent} from "@/components";

const ImageCard = ( {imageUrl, comment}: ImageCardProps) => {

    return (
        <div className="w-60 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <ImageComponent imageUrl={imageUrl} />
            <Commentary text={comment} />
        </div>
    );
};

export default ImageCard;