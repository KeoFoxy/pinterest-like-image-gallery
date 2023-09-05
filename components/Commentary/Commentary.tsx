import React, { useState, useRef, useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

import { CommentaryProps } from "@/components/Commentary/Commentary.props";

const Commentary = ({text}: CommentaryProps) => {

    const [isEditing, setIsEditing] = useState(false);
    const [comment, setComment] = useState(text);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleEditToggle = () => {
        setIsEditing((prev) => !prev);
    };

    const handleEscapePress = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setIsEditing(false);
        }
    };

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }

        document.addEventListener('keydown', handleEscapePress);
        return () => {
            document.removeEventListener('keydown', handleEscapePress);
        };
    }, [isEditing]);

    return (
        <div className="relative group p-4">
            <div className="flex items-start p-2 rounded-md">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={comment}
                            ref={inputRef}
                            onChange={(e) => setComment(e.target.value)}
                            className="bg-white text-lg text-gray-700 flex-grow mr-2 w-full focus:outline-none leading-relaxed"
                            maxLength={500}
                        />
                        <button onClick={handleEditToggle}>
                            <CheckIcon className="text-black" />
                        </button>
                    </>
                ) : (
                    <>
                        <p className="text-lg leading-relaxed text-gray-700 flex-grow mr-2">{comment}</p>
                        <button onClick={handleEditToggle}>
                            <EditIcon className="text-black"/>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Commentary;