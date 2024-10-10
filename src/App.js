import { Provider } from "react-redux";
import store from "./store"

import LengthControls from "./LengthControls";
import Timer from "./Timer";
import TimerControls from "./TimerControls";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./custom.scss"

function App() {
  return (
    <Provider store={store}>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-center" xs={12} md={12} lg={12} xl={8}>
              <h1 className="fw-bolder text-center bg-dark w-50 rounded-3  p-2 text-white">Pomodoro Timer</h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="bg-secondary rounded-5 p-4 text-white text-center border border-dark border-3" xs={12} md={12} lg={8} xl={6}>
              <LengthControls />
              <Timer />
              <TimerControls />
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
