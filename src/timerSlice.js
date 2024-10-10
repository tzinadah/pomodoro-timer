import { createSlice } from "@reduxjs/toolkit";

const defaultState = {sessionLength: 25, breakLength: 5, remainingSeconds: 1500, isRunning: false, currentSegment: "Session"};

const timerSlice = createSlice({
    name: "timerSlice",
    initialState: defaultState,
    reducers: {
        
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
        
        decrementTimer: (state) => {
            return {...state, remainingSeconds: state.remainingSeconds - 60}
        },
        
        timerEnd: (state) =>{
            return {...state, remainingSeconds: state.currentSegment === "Session" ? state.breakLength : state.sessionLength}
        },

        togglePlay: (state) => {
            return {...defaultState};
        },
        
        reset: (state) => {
            return {...defaultState};
        }
    }
});

export const {incrementSession, decrementSession, incrementBreak, decrementBreak, decrementTimer, timerEnd, togglePlay, reset} = timerSlice.actions;
export default timerSlice.reducer;


