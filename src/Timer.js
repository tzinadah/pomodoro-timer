import { useEffect } from "react";

import { decrementTimer, timerEnd, updatePending } from "./timerSlice";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Timer(props){

    const dispatch = useDispatch();
    
    const seconds = useSelector((state) => state.timer.remainingSeconds);
    const isRunning = useSelector((state) => state.timer.isRunning);
    const currentSegment = useSelector((state) => state.timer.currentSegment)
    
    useEffect(()=>{
        
        if(seconds === 0){
            dispatch(timerEnd());
        }

        if(isRunning){
            const pendingId = setTimeout(()=> dispatch(decrementTimer()), 1000);
            dispatch(updatePending(pendingId));
        }

    },[isRunning,seconds]);

    return (
        <>
        <Row><h2>{currentSegment}</h2></Row>
        <Row>
            <Col>
                {Math.floor(seconds/60).toString()}:{(seconds%60).toString().padStart(2, "0")}            
            </Col>
        </Row>
        </>
    );    
}

export default Timer