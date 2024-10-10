import { Provider } from "react-redux";
import store from "./store"

import LengthControls from "./LengthControls";
import Timer from "./Timer";
import TimerControls from "./TimerControls";


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./custom.scss"

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Row><h1>Pomodoro Timer</h1></Row>
        <LengthControls />
        <Timer />
        <TimerControls />
      </Container>
    </Provider>
  );
}

export default App;
