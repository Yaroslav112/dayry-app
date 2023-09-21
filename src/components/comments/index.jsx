import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../store/items/actions";
import "./styles.css";

const Comments = ({ itemId }) => {
    const dispatch = useDispatch();
    const [commentText, setCommentText] = useState('');
    const [selectedColor, setSelectedColor] = useState('#ffffff');

    const commentsForSelectedItem = useSelector(state => state?.items?.items?.find(obj => obj?.id === itemId)?.comments);

    const handleAddComment = (e) => {
        e.preventDefault();
        if (commentText.trim()) {
            dispatch(addComment(itemId, { text: commentText, color: selectedColor }));
            setCommentText('');
        }
    };

    return (
        <>
            <div className='comments-container'>
                <h2 className='comments-text'>Comments #{itemId}</h2>
                <ul>
                    {commentsForSelectedItem?.map(comment => {
                        return (
                            <li className='comment' key={comment.id}>
                                  <span style={{
                                      backgroundColor: comment.commentData.color,
                                      border: '1px solid gray',
                                      width: '50px',
                                      height: '50px',
                                      marginRight: '10px'
                                  }}></span>
                                {comment.commentData.text}
                            </li>
                        )
                    })}
                </ul>
                <form className='comments-form' onSubmit={handleAddComment}>
                    <input
                        type='color'
                        value={selectedColor}
                        onChange={e => setSelectedColor(e.target.value)}
                    />
                    <textarea
                        className='text-area'
                        placeholder='Type comment here...'
                        value={commentText}
                        onChange={e => setCommentText(e.target.value)}
                        required
                    ></textarea>
                    <button className='comments-button' type='submit'>Add New</button>
                </form>
            </div>
        </>
    );
}

export default Comments;
