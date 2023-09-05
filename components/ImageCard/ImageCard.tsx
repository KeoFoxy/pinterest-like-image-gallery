
import Image from "next/image";
import { useState, MouseEvent } from "react";
import { ImageCardProps } from "@/components/ImageCard/ImageCard.props";

const ImageCard = ( {imageUrl, comment}: ImageCardProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleImageClick = () => {
        setIsOpen(true);
    }

    const handleClose = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsOpen(false);
        }
    }

    return (
        <>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden cursor-pointer" onClick={handleImageClick}>
                <div className="p-2">
                    <img
                        src={imageUrl}
                        alt="Image content"
                        className="max-w-full align-middle rounded-md shadow-xl"
                    />
                </div>
                <div className="p-4">
                    <p className="text-lg leading-relaxed">{comment}</p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleClose}>
                    <img src={imageUrl} alt="Image content" style={{
                        border: '0',
                        height: 'auto',
                        maxWidth: '80%',
                        verticalAlign: 'middle'
                    }}/>
                </div>
            )}
        </>
    );
};

export default ImageCard;