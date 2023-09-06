import {ImageCard} from "@/components";
import {GalleryProps} from "@/components/Gallery/Gallery.props";

const Gallery = ({items}: GalleryProps) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {items.map(item => (
                <ImageCard key={item.id} imageUrl={item.url} comment={"Some comment for " + item.id} />
            ))}
        </div>
    );
};

export default Gallery;