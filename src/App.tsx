import { Timer } from './components/timer/timer';

import rocketLogo from "./assets/rocket.png";
import heroLogo from "./assets/hero.png";
import backgroundImage from "./assets/background.svg";

import './App.scss'

const defaultTimerValue = 5 * 60;

function App() {

  const onTimerExpired = () => alert("You missed the last rocket to mars!");

  return (
    <div className="App" style={{ background: `url(${backgroundImage})` }}>
      <div>
        <img src={rocketLogo} className="logo" id="rocket__logo" />
      </div>
      <section className="text__section">
        <div className="text__container">
          <h4>Get your seat to Mars!</h4>
          <p>
            Earth is doomed, but don't worry! the last rocket is leaving for mars soon, so hurry up and book your flight!
          </p>
        </div>
        <div>
          <img src={heroLogo} className="logo" />
        </div>
      </section>
      <section className="timer__section">
        <Timer
          timerId="timer_1"
          timeInSeconds={defaultTimerValue}
          label="Countdown to lift off" />
        <Timer
          timerId="timer_2"
          timeInSeconds={defaultTimerValue - (3 * 60)}
          label="Countdown to lift off" />
        <Timer
          timerId="timer_3"
          timeInSeconds={defaultTimerValue - (4 * 60)}
          label="Countdown to lift off" />
      </section>
    </div>
  )
}

export default App
