import { FC } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Commentary, ImageComponent } from "@/components";

import { useCard } from './hooks';

interface ImageCardProps {
  id: number;
  imageUrl: string;
  comment: string;
  onRemove: (id: number) => void;
}


const ImageCard: FC<ImageCardProps> = ({ imageUrl, comment, id, onRemove }) => {
    const { updateCardComment } = useCard();

    const handleUpdateComment = (newComment: string) => {
      updateCardComment(id, newComment);
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
