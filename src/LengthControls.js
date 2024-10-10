import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {ArrowUp, ArrowDown} from "react-bootstrap-icons";

function LengthControls(props){

    return(
        <Row>
            <Col>
                <Row><h2>Session Length</h2></Row>
                <Row>
                    <Col>
                        <Button><ArrowDown /></Button>
                    </Col>
                    <Col>
                        <p>25</p>
                    </Col>
                    <Col>
                        <Button><ArrowUp /></Button>
                    </Col>
                </Row>
            </Col>
            <Col>
            <Col>
                <Row><h2>Break Length</h2></Row>
                <Row>
                    <Col>
                        <Button><ArrowDown /></Button>
                    </Col>
                    <Col>
                        <p>5</p>
                    </Col>
                    <Col>
                        <Button><ArrowUp /></Button>
                    </Col>
                </Row>
            </Col>
            </Col>
        </Row>
    ); 
}

export default LengthControls;