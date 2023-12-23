import{createSlice} from "@reduxjs/toolkit"
const initialState = {
    cars: ["Model S","Tata-E","Model 3","Hundi", "Model X", "Model Y"]
}
const carSlice = createSlice({
    name:"car",
    initialState,
    reducers:{}
})
export const selectcars = state => state.car.cars
export default carSlice.reducer