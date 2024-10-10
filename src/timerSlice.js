import { createSlice } from "@reduxjs/toolkit";

const defaultState = {sessionLength: 25, breakLength: 5, remainingSeconds: 1500, isRunning: false, currentSegment: "Session", pending: ""};

const timerSlice = createSlice({
    name: "timerSlice",
    initialState: defaultState,
    reducers: {
        
        incrementSession: (state) => {
            clearTimeout(state.pending);
            return {...state, sessionLength: Math.min(99, state.sessionLength + 1), remainingSeconds: Math.min(5940, state.sessionLength * 60 + 60), isRunning: false, currentSegment:"Session"};
        },
        
        decrementSession: (state) => {
            clearTimeout(state.pending);
            return {...state, sessionLength: Math.max(1, state.sessionLength - 1), remainingSeconds: Math.max(60, state.sessionLength * 60 - 60), isRunning: false, currentSegment:"Session"};
        },
        
        incrementBreak: (state) => {
            clearTimeout(state.pending);
            return {...state, breakLength: Math.min(99, state.breakLength + 1), remainingSeconds: state.sessionLength * 60, isRunning: false, currentSegment:"Session"};
        },
        
        decrementBreak: (state) => {
            clearTimeout(state.pending);
            return {...state, breakLength: Math.max(1, state.breakLength - 1), remainingSeconds: state.sessionLength * 60, isRunning: false, currentSegment:"Session"};
        },
        
        decrementTimer: (state) => {
            return {...state, remainingSeconds: state.remainingSeconds - 1}
        },
        
        updatePending: (state,action) =>{
            return {...state, pending: action.payload}
        },
        
        timerEnd: (state) =>{
            clearTimeout(state.pending)
            return {...state, remainingSeconds: (state.currentSegment === "Session" ? state.breakLength  : state.sessionLength) * 60, currentSegment: state.currentSegment === "Session"? "Break" : "Session"}
        },

        togglePlay: (state) => {
            return {...state, isRunning: !state.isRunning};
        },
        
        reset: (state) => {
            clearTimeout(state.pending);
            return {...defaultState};
        }
    }
});

export const {incrementSession, decrementSession, incrementBreak, decrementBreak, decrementTimer, updatePending, timerEnd, togglePlay, reset} = timerSlice.actions;
export default timerSlice.reducer;


