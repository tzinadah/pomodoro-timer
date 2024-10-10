import { useDispatch, useSelector } from "react-redux";
import { togglePlay,reset } from "./timerSlice";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { PlayFill, PauseFill, ArrowClockwise } from "react-bootstrap-icons";

function TimerControls(props){
    
    const dispatch = useDispatch();
    
    const isRunning = useSelector((state) => state.timer.isRunning);
    
    return (
    <Row>
        <Col>
            <Button onClick={() => dispatch(togglePlay())}>
                {isRunning ? <PauseFill /> : <PlayFill />}
            </Button>
        </Col>
        <Col>
            <Button onClick={() => dispatch(reset())}>
                <ArrowClockwise />
            </Button>
        </Col>
    </Row>
    );
}

export default TimerControls;