export interface ImageCardProps {
    imageUrl: string;
    comment: string;
    id: number;
    onRemove: (id:number) => void;
}