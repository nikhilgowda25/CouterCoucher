import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    TOGGLE_SIDEBAR,
  } from "./actionTypes";
  
  const initialState = {
    cartItems: [],
    isSidebarOpen: false,
  };

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART: {
          return { ...state, cartItems: action.payload };
        }
    
        case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: state.cartItems.filter((item) => item.id !== action.payload),
          };
    
        case INCREMENT_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload
                ? { ...item, quanity: item.quanity + 1 }
                : item
            ),
          };
    
        case DECREMENT_QUANTITY:
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload && item.quanity > 1
                ? { ...item, quanity: item.quanity - 1 }
                : item
            ),
          };

          case TOGGLE_SIDEBAR:
            return {
              ...state,
              isSidebarOpen: action.payload
            }
    
        default:
          return state;
    }
}