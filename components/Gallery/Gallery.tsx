import { FC } from 'react';
import { ImageCard } from "@/components";


interface GalleryItem {
  id: number;
  url: string;
  comment: string;
}
export interface GalleryProps {
  items: Array<GalleryItem>;
  onRemove: (id: number) => void;
}

const Gallery: FC<GalleryProps> = ({ items, onRemove }) => {
  return (
    <div className="mt-5 px-100 columns-3 col-span-5 xs:columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4">
      {items.map(item => (
        <ImageCard imageUrl={item.url} comment={item.comment} id={item.id} onRemove={onRemove} />
      ))};
    </div>
  );
};

export default Gallery;