import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    
    },
    increaseItemQuantity: (state, action) => {
        const itemToIncrease = state.items.find(
            item => item.name === action.payload
        );
        if (itemToIncrease) {
            itemToIncrease.quantity +=1;
        }
    },
    decreaseItemQuantity: (state, action) => {
        const itemToDecrease = state.items.find(
            item => item.name === action.payload
        );
        if (itemToDecrease && itemToDecrease.quantity > 1) {
            itemToDecrease.quantity --;
        }
    },
    clearCart(state) {
        state.items
    },
  },
});

export const { addItem, removeItem, updateQuantity, increaseItemQuantity, decreaseItemQuantity, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
