import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    errorMesage: "",
    apiKey:sessionStorage.getItem("apiKey"),
    city:"İSTANBUL",
    value:"",
    apiData:"",
    show:false,
    cod:"",
  },
  reducers: {
    setErrorMesage: (state, action) => {
      state.errorMesage=action.payload
    },
    setApikey: (state, action) => {
      state.apiKey=action.payload
    },
    setCity: (state, action) => {
      state.city=action.payload
          },
    setValue: (state, action) => {
      state.value=action.payload
      
    },
    setApiData: (state, action) => {
      state.apiData=action.payload
    },
    setShow: (state) => {
      state.show=true
    },
    setCod: (state, action) => {
      state.cod=action.payload
    },
  },
})

export const { setErrorMesage, setApikey, setCity,setValue, setApiData, setShow, setCod} =  weatherSlice.actions

export default  weatherSlice.reducer