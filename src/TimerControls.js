import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { PlayFill, PauseFill, ArrowClockwise } from "react-bootstrap-icons";

function TimerControls(props){
    return (
    <Row>
        <Col>
            <Button>
                {true ? <PauseFill /> : <PlayFill />}
            </Button>
        </Col>
        <Col>
            <Button>
                <ArrowClockwise />
            </Button>
        </Col>
    </Row>
    );
}

export default TimerControls;