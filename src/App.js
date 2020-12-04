import './App.css';
import DayOne from './calendar/day1';
import DayTwo from './calendar/day2';
import DayThree from './calendar/day3';
import DayFour from './calendar/day4';

function App() {
  return (
    <div>
      <header>
        <h1>Advent of Code 2020</h1>

      </header>
      <nav>
        <a 
          href="https://adventofcode.com/"
          target="_blank" 
          rel="noreferrer"
        >
          Advent of Code Website
        </a>
        <a
          href="https://github.com/Charles6/advent-of-code-2020"
          target="_blank"
          rel="noreferrer"
        >
          Github repo
        </a>
      </nav>
      <main>
        <h4 className="mon label">Monday</h4>
        <h4 className="tue label">Tuesday</h4>
        <h4 className="wed label">Wedsday</h4>
        <h4 className="thu label">Thursday</h4>
        <h4 className="fri label">Friday</h4>
        <h4 className="sat label">Saturday</h4>
        <h4 className="sun label">Sunday</h4>
        <DayOne/>
        <DayTwo/>
        <DayThree/>
        <DayFour/>

        <div className="thu wk2 goal">

        </div>
        <div className="fri wk4 xmas">

        </div>
      </main>
    </div>
  );
}

export default App;
