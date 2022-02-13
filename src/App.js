import React from 'react';
import logo from './logo.svg';
import './App.css';

const Monsters = [
  { name: 'Frankenstein' },
  { name: 'Dracula' },
  { name: 'Zombie' },
]


function App() {
  const [monsters, setMonsters] = React.useState(Monsters);
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        console.log(users);
        setMonsters(users);
      });
  }, []); // ComponentDidMount 

  return (
    <div className="App">
      {
        // monsters.map((mon,ix) => <h1 key={mon.id}>{`${ix}: ${mon.name}`}</h1>)      
        monsters.map((mon,ix) => <h5 key={mon.id}>{`${JSON.stringify(mon)}`}</h5>)      
      }
    </div>
  );
}

export default App;
