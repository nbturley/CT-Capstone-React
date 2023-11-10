import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LogState {
    service_type: string;
    notes: string;
    miles: string;
    cost: string;
    mechanic: string;
}

const initialState: LogState = {
    service_type: "service_type",
    notes: "notes",
    miles: "miles",
    cost: "cost",
    mechanic: "mechanic"
};

const logSlice = createSlice({
    name: "logs",
    initialState,
    reducers: {
        chooseServiceType: (state, action: PayloadAction<string>) => { state.service_type = action.payload},
        chooseNotes: (state, action: PayloadAction<string>) => { state.notes = action.payload},
        chooseMiles: (state, action: PayloadAction<string>) => { state.miles = action.payload},
        chooseCost: (state, action: PayloadAction<string>) => { state.cost = action.payload},
        chooseMechanic: (state, action: PayloadAction<string>) => { state.mechanic = action.payload},
    }
})

export const logReducer = logSlice.reducer;
export const { chooseServiceType, chooseNotes, chooseMiles, chooseCost, chooseMechanic } = logSlice.actions