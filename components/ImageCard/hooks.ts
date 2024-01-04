import { useDispatch } from "react-redux";

import { updateComment } from "../../store/slice";

export const useCard = () => {
    const dispatch = useDispatch();

    const updateCardComment = (id: number, newComment: string) => {
        dispatch(updateComment({ id, comment: newComment }));
    };

    return {
        updateCardComment,
    };
};
