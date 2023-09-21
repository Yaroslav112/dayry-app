import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, toggleItem } from "../../store/items/actions";
import "./styles.css";

const Items = ({ onItemSelect }) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items);
    const selectedItemId = useSelector(state => state.items.selectedItemId);
    const [itemName, setItemName] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (itemName.trim()) {
            dispatch(addItem(itemName));
            setItemName('');
        }
    };

    const toggleItemSelection = (itemId) => {
        onItemSelect(itemId)
        dispatch(toggleItem(itemId));
    };

    return (
        <div className='items-container'>
            <h2 className='items-text'>Items</h2>
            <form className='form' onSubmit={handleAddItem}>
                <input
                    type='text'
                    className='form-input'
                    placeholder='Type name here...'
                    value={itemName}
                    onChange={e => setItemName(e.target.value)}
                    required
                />
                <button className='items-button' type='submit'>Add New</button>
            </form>
            <ul className='list active-item'>
                {items?.map(item => (
                    <li
                        className={`item ${item.id === selectedItemId ? 'selected-item' : ''}`}
                        key={item.id}
                        onClick={() => toggleItemSelection(item.id)}
                    >
                        {item.name}
                        <div>
                            <span className='quantity-comments'>{item?.comments?.length}</span>
                            <button
                                className='delete-button'
                                onClick={(e) => { e.stopPropagation(); dispatch(removeItem(item.id))}}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Items;
