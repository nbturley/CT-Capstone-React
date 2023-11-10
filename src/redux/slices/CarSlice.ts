import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CarState {
    year: string;
    make: string;
    model: string;
    color: string;
}

const initialState: CarState = {
    year: "year",
    make: "make",
    model: "model",
    color: "color",
};

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        chooseYear: (state, action: PayloadAction<string>) => { state.year = action.payload},
        chooseMake: (state, action: PayloadAction<string>) => { state.make = action.payload},
        chooseModel: (state, action: PayloadAction<string>) => { state.model = action.payload},
        chooseColor: (state, action: PayloadAction<string>) => { state.color = action.payload},
    }
})

export const carReducer = carSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, chooseColor } = carSlice.actions