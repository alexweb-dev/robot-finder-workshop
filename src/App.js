import React, { useEffect, useState } from 'react';
import './App.css';
import Robots from './data/data';
import RobotCard from './components/RobotCard';
import SearchBar from './components/SearchBar';

function App() {
  const [robots, setRobots] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch('https://wild.creativebrain.fr/robots')
      .then((res) => res.json())
      .then((data) => {
        setRobots(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Robot Finder</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div>
        {robots
          .filter((robot) =>
            robot.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((robot, i) => (
            <div key={i}>
              <RobotCard robot={robot} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
