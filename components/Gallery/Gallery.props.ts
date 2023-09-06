interface GalleryItem {
    id: number;
    url: string;
    comment: string;
}

export interface GalleryProps {
    items: GalleryItem[];
    onRemove: (id: number) => void;
}
