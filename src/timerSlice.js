import { createSlice } from "@reduxjs/toolkit";

const defaultState = {sessionLength: 25, breakLength: 5, remainingSeconds: 1500, isRunning: false, currentSegment: "Session"};

const timerSlice = createSlice({
    name: "timerSlice",
    initialState: defaultState,
    reducers: {
        
        incrementSession: (state) => {
            return {...defaultState, sessionLength: Math.min(99, state.sessionLength + 1), remainingSeconds: Math.min(5940, state.remainingSeconds + 60), isRunning: false};
        },
        
        decrementSession: (state) => {
            return {...defaultState, sessionLength: Math.max(1, state.sessionLength - 1), remainingSeconds: Math.max(60, state.remainingSeconds - 60), isRunning: false};
        },
        
        incrementBreak: (state) => {
            return {...defaultState, breakLength: Math.min(99, state.breakLength + 1), isRunning: false};
        },
        
        decrementBreak: (state) => {
            return {...defaultState, breakLength: Math.max(1, state.breakLength - 1), isRunning: false};
        },
        
        decrementTimer: (state) => {
            return {...state, remainingSeconds: state.remainingSeconds - 60}
        },
        
        timerEnd: (state) =>{
            return {...state, remainingSeconds: state.currentSegment === "Session" ? state.breakLength : state.sessionLength}
        },

        togglePlay: (state) => {
            return {...state, isRunning: !state.isRunning};
        },
        
        reset: (state) => {
            return {...defaultState};
        }
    }
});

export const {incrementSession, decrementSession, incrementBreak, decrementBreak, decrementTimer, timerEnd, togglePlay, reset} = timerSlice.actions;
export default timerSlice.reducer;


