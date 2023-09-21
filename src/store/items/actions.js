import { ADD_ITEM, REMOVE_ITEM, ADD_COMMENT, TOGGLE_ITEM_SELECTION } from "./constants";

export const addItem = (name) => ({
    type: ADD_ITEM,
    payload: name,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id,
});

export const addComment = (itemId, comment) => ({
    type: ADD_COMMENT,
    payload: { itemId, comment }
});

export const toggleItem = (itemId) => ({
    type: TOGGLE_ITEM_SELECTION,
    payload: itemId,
});

