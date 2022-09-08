import { createSlice } from '@reduxjs/toolkit'

const elements = createSlice({
  initialState: {
    elements: [],
  },
  name: 'elements',
  reducers: {
    addElement: (state, action) => {
      state.elements = [...state.elements, action.payload]
      return state
    },
    removeElement: (state, action) => {
      const updated = state.elements.filter(
        elem => elem.id !== action.payload && elem
      )
      state.elements = updated
      return state
    },
    updateElement: (state, action) => {
      const updated = state.elements.map(elem =>
        elem.id === action.payload.id
          ? { ...elem, name: action.payload.value }
          : elem
      )
      state.elements = updated
      return state
    },
  },
})

export const { addElement, removeElement, updateElement } = elements.actions

export default elements.reducer
