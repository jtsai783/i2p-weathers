import { createSlice, configureStore } from '@reduxjs/toolkit'

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    lat: '',
    long: '',
    name: ''
  },
  reducers: {
    setLocation: (state, action) => {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
      state.name = action.payload.name;
    }
  }
})

export const { setLocation } = locationSlice.actions

export const store = configureStore({
  reducer: {
  	location: locationSlice.reducer,	
  }
})

export interface storeInterface {
	location:{
		lat: string,
		long: string,
		name: ''
	}
}