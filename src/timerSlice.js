import { createSlice } from "@reduxjs/toolkit";

const defaultState = {sessionLength: 25, breakLength: 5, remainingSeconds: 1500, isRunning: false};

const timerSlice = createSlice({
    name: "timerSlice",
    initialState: defaultState,
    reducers: {
        
        reset: (state) => {
            return {...defaultState};
        },
        
        incrementSession: (state) => {
            return {...state, sessionLength: Math.min(99, state.sessionLength + 1), isRunning: false};
        },

        decrementSession: (state) => {
            return {...state, sessionLength: Math.max(1, state.sessionLength - 1), isRunning: false};
        },

        incrementBreak: (state) => {
            return {...state, breakLength: Math.min(99, state.breakLength + 1), isRunning: false};
        },

        decrementBreak: (state) => {
            return {...state, breakLength: Math.max(1, state.breakLength - 1), isRunning: false};
        },

        togglePlay: (state) => {
            return {...defaultState};
        },

        timerEnd: (state) =>{
            return {...defaultState};
        }
    }
});

export const {reset, incrementSession, decrementSession, incrementBreak, decrementBreak, togglePlay, timerEnd} = timerSlice.actions;
export default timerSlice.reducer;


