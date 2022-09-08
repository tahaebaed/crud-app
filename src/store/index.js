import { configureStore } from '@reduxjs/toolkit'
import elements from './Elments/Elements'

const store = configureStore({
  reducer: {
    elements,
  },
})

export default store
