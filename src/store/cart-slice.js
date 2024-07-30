import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    items: [], totalQuantity: 0
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items  
        },
        addItem(state, action) {
            const newItem = { ...action.payload }
            const itemIndex = state.items.findIndex(item => item.id === newItem.id)
            state.totalQuantity++
            if (itemIndex === -1) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    describtion: newItem.describtion,
                    quantity: 1,
                    totalPrice: newItem.price

                })
            } else {
                newItem.quantity++
                newItem.totalPrice = newItem.quantity * newItem.price
                state.items[itemIndex] = newItem
            }
    
        },
        removeItem(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)
            const item = state.items[itemIndex]
            state.totalQuantity--
                if (item?.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                } else {
                    item.quantity--
                    item.totalPrice = item.quantity * item.price
                    state.items[itemIndex] = item
                }
         }
    }
    })
    export const cartActions = cartSlice.actions
    export default cartSlice.reducer