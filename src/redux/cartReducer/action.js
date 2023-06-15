import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    INCREMENT_QUANTITY,
    DECREMENT_QUANTITY,
    TOGGLE_SIDEBAR
  } from "./actionTypes";

  export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item,
    }
  }

  export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        payload: id,
    }
  }

  export function incrementQuantity(id) {
    return {
        type: INCREMENT_QUANTITY,
        payload: id,
    }
  }

  export function decrementQuantity(id) {
    return {
        type: DECREMENT_QUANTITY,
        payload: id,
    }
  }

  export function toggleSidebar(toggle) {
    return {
      type: TOGGLE_SIDEBAR,
      payload: toggle
    }
  }