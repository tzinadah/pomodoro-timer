import { createSlice } from "@reduxjs/toolkit";

const defaultState = {sessionLength: 25, breakLength: 5, remainingSeconds: 25*60, isRunning: false};

const timerSlice = createSlice({
    name: "timerSlice",
    initialState: defaultState,
    reducers: {
        
        reset: (state) => {
            return defaultState;
        },
        
        incrementSession: (state) => {
            return defaultState;
        },

        decrementSession: (state) => {
            return defaultState;
        },

        incrementBreak: (state) => {
            return defaultState;
        },

        decrementBreak: (state) => {
            return defaultState;
        },

        togglePlay: (state) => {
            return defaultState;
        },

        timerEnd: (state) =>{
            return defaultState;
        }
    }
});

export const {reset, incrementSession, decrementSession, incrementBreak, decrementBreak, togglePlay, timerEnd} = timerSlice.actions;
export default timerSlice.reducer;


