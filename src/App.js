import './App.css';
import DayOne from './calendar/day1';
import DayTwo from './calendar/day2';
import DayThree from './calendar/day3';

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
        <DayOne/>
        <DayTwo/>
        <DayThree/>




      </main>
    </div>
  );
}

export default App;
