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
    <Row className="justify-content-center">
        <Col xs={3}>
            <Button className="rounded-circle text-light border border-light border-3" variant="info" onClick={() => dispatch(togglePlay())}>
                {isRunning ? <PauseFill /> : <PlayFill />}
            </Button>
        </Col>
        <Col xs={3}>
            <Button className="rounded-circle text-light border border-light border-3" variant="info" onClick={() => dispatch(reset())}>
                <ArrowClockwise />
            </Button>
        </Col>
    </Row>
    );
}

export default TimerControls;