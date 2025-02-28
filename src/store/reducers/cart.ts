import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MenuItem } from '../../models/Menu'

type CartState = {
  items: MenuItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<MenuItem>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    closeCart: (state) => {
      state.isOpen = false
    },
    openCart: (state) => {
      state.isOpen = true
    }
  }
})

export const { addItem, removeItem, closeCart, openCart } = cartSlice.actions

export const getTotalPrice = (items: MenuItem[]) => {
  return items
    .reduce((total, item) => total + parseFloat(item.preco.toString()), 0)
    .toFixed(2)
}

export default cartSlice.reducer
