import LengthControls from "./LengthControls";
import Timer from "./Timer";
import TimerControls from "./TimerControls";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./custom.scss"

function App() {
  return (
    <Container>
      <Row><h1>Pomodoro Timer</h1></Row>
      <LengthControls />
      <Timer />
      <TimerControls />
    </Container>
  );
}

export default App;
