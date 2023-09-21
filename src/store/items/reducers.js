import { ADD_ITEM, REMOVE_ITEM, ADD_COMMENT, TOGGLE_ITEM_SELECTION } from "./constants";

const savedItems = localStorage.getItem('items');

const initialState = {
    items: savedItems ? JSON.parse(savedItems) : [],
    selectedItemId: null,
};

const itemsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM:
            state = {
                ...state,
                items: [...state.items, { id: Date.now(), name: action.payload, comments: [] }],
            };
            break;

        case REMOVE_ITEM:
            state = {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
            break;

        case TOGGLE_ITEM_SELECTION:
            return { ...state, selectedItemId: action.payload };

        case ADD_COMMENT:
            state = {
                ...state,
                items: state.items.map(item => {
                    return (
                        item.id === action.payload.itemId
                            ? { ...item, comments: [...item.comments, { id: Date.now(), commentData: action.payload.comment }] }
                            : item
                    )
                })
            };
            break;

        default:
            return state;
    }

    localStorage.setItem('items', JSON.stringify(state.items));

    return state;
}

export default itemsReducer;
