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
        <Row className="">
            <Col>
                <Row><h2 className="fw-bold">Session Length</h2></Row>
                <Row className="justify-content-center">
                    <Col xs={3}>
                        <Button className="rounded-circle border border-light border-3" variant="info" onClick={()=> dispatch(decrementSession())}><ArrowDown className="text-light"/></Button>
                    </Col>
                    <Col  xs={2}>
                        <h5 className="text-center fw-bolder">{sessionLength}</h5>
                    </Col>
                    <Col xs={3}>
                        <Button className="rounded-circle border border-light border-3" variant="info" onClick={()=> dispatch(incrementSession())}><ArrowUp className="text-light"/></Button>
                    </Col>
                </Row>
            </Col>
            <Col>
            <Col>
                <Row><h2 className="fw-bold">Break Length</h2></Row>
                <Row className="justify-content-center">
                    <Col xs={3}>
                        <Button className="rounded-circle border border-light border-3" variant="info" onClick={()=> dispatch(decrementBreak())}><ArrowDown className="text-light"/></Button>
                    </Col>
                    <Col xs={2}>
                    <h5 className="text-center fw-bolder">{breakLength}</h5>
                    </Col>
                    <Col xs={3}>
                        <Button className="rounded-circle border border-light border-3" variant="info" onClick={()=> dispatch(incrementBreak())}><ArrowUp className="text-light"/></Button>
                    </Col>
                </Row>
            </Col>
            </Col>
        </Row>
    ); 
}

export default LengthControls;