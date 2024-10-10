import { incrementSession, decrementSession, incrementBreak, decrementBreak } from "./timerSlice";
import { useDispatch, useSelector } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {ArrowUp, ArrowDown} from "react-bootstrap-icons";

function LengthControls(props){

    const dispatch = useDispatch();
    const sessionLength = useSelector((state) => state.timer.sessionLength);
    const breakLength = useSelector((state) => state.timer.breakLength);

    return(
        <Row>
            <Col>
                <Row><h2>Session Length</h2></Row>
                <Row>
                    <Col>
                        <Button onClick={()=> dispatch(decrementSession())}><ArrowDown /></Button>
                    </Col>
                    <Col>
                        {sessionLength}
                    </Col>
                    <Col>
                        <Button onClick={()=> dispatch(incrementSession())}><ArrowUp /></Button>
                    </Col>
                </Row>
            </Col>
            <Col>
            <Col>
                <Row><h2>Break Length</h2></Row>
                <Row>
                    <Col>
                        <Button onClick={()=> dispatch(decrementBreak())}><ArrowDown /></Button>
                    </Col>
                    <Col>
                        {breakLength}
                    </Col>
                    <Col>
                        <Button onClick={()=> dispatch(incrementBreak())}><ArrowUp /></Button>
                    </Col>
                </Row>
            </Col>
            </Col>
        </Row>
    ); 
}

export default LengthControls;