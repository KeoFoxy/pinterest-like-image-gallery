interface GalleryItem {
    id: number;
    url: string;
}

export interface GalleryProps {
    items: GalleryItem[];
    onRemove: (id: number) => void;
}
