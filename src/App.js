import LengthControls from "./LengthControls";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./custom.scss"

function App() {
  return (
    <Container>
      <Row><h1>Pomodoro Timer</h1></Row>
      <LengthControls />
    </Container>
  );
}

export default App;
