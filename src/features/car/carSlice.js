import{createSlice} from "@reduxjs/toolkit"
const initialState = {
    cars: ["model s","TATA-E","model 3","HUNDI", "model x", "model y"]
}
const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})
export const selectcars = state => state.car.cars
export default carSlice.reducer