import {ImageCard} from "@/components";
import {GalleryProps} from "@/components/Gallery/Gallery.props";

const Gallery = ({items, onRemove}: GalleryProps) => {

    return (
        <div className="mt-5 px-100 columns-3 col-span-5 sm:columns-2 lg:columns-3 xl:columns-4">
            {items.map(item => (
                <ImageCard imageUrl={item.url} comment={item.comment} id={item.id} onRemove={onRemove} />
            ))}
        </div>
    );
};

export default Gallery;