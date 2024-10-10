import { useEffect, useRef } from "react";

import { decrementTimer, timerEnd, updatePending } from "./timerSlice";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Timer(props){

    const alarm = useRef(new Audio("http://sfxcontent.s3.amazonaws.com/soundfx/AircraftAlarm.mp3"));

    const dispatch = useDispatch();
    
    const seconds = useSelector((state) => state.timer.remainingSeconds);
    const isRunning = useSelector((state) => state.timer.isRunning);
    const currentSegment = useSelector((state) => state.timer.currentSegment)

    useEffect(()=>{
        if(seconds === 0){
            dispatch(timerEnd());
            alarm.current.play();
        }else if(isRunning){
            const pendingId = setTimeout(()=> dispatch(decrementTimer()), 1000);
            dispatch(updatePending(pendingId));
        }

    },[isRunning,seconds]);

    return (
        <>
        <Row><h2 className="fw-bolder">{currentSegment}</h2></Row>
        <Row>
            <Col className="d-flex justify-content-center">
                <h1 className="bg-primary w-25 p-2 rounded-pill border border-3 border-light fw-bold">{Math.floor(seconds/60).toString()}:{(seconds%60).toString().padStart(2, "0")}</h1>            
            </Col>
        </Row>
        </>
    );    
}

export default Timer