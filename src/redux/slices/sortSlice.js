import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterIndex: 0,
  sort: {
    name: 'популярности',
    desc: 'rating'
  },
  currentPage: 1
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterIndex(state, action) {
      state.filterIndex = action.payload
    },
    setSort(state, action) {
      state.sort = action.payload
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  }
})

export const { setFilterIndex, setSort, setCurrentPage } = filterSlice.actions

export default filterSlice.reducer