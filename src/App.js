import { useState, useEffect } from "react";

import Container from "./Container/Container";
import TimeDisplay from "./TimeDisplay/TimeDisplay";
import Button from "./Button/Button";

function App() {
  const [time, setTime] = useState(0); 
  const [timeCountdown, setTimeCountdown] = useState(null);

  const start = () => {

    setTimeCountdown(setInterval(() => {
      setTime(prev => prev + 15);
    }, 1))

  }

  const stop = () => {
    if (timeCountdown) clearInterval(timeCountdown);
  }

  const reset = () => {
    if (timeCountdown) clearInterval(timeCountdown);
    setTime(0);
  }

  useEffect(() => {
    return () => {
      if (timeCountdown) clearInterval(timeCountdown);
    }
  }, [])

  return (
    <div>
      <Container>
        <TimeDisplay time={time} />
        <div>
          <Button action={start}>Start</Button>
          <Button action={stop}>Stop</Button>
          <Button action={reset}>Reset</Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
