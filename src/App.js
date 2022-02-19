import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = React.useState([]);
  const [searchField, setSearchField] = React.useState('');
  const [filterMonsters, setFilterMonsters] = React.useState([]);
  //const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    if (monsters.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => {
          console.log(users);
          setMonsters(users);
          //setFilterMonsters(users);
        });
    }
    console.log(`useEffect searchField:${searchField}`);
    // setFilterMonsters(searchField === '' ? monsters :
    //   monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase())
    //   || m.email.toLowerCase().includes(searchField.toLowerCase())));
    setFilterMonsters(
      monsters.filter(m => m.name.toLowerCase().includes(searchField.toLowerCase())
      || m.email.toLowerCase().includes(searchField.toLowerCase())));
    console.log(`useEffect filterMonsters:\n`, filterMonsters);
  }, [searchField, monsters]); // ComponentDidMount  

  const handleChange = e => {
    setSearchField(e.target.value);
    //setTitle(e.target.value);
  }

  return (
    <div className="App">
      {/* <SearchBox placeholder='Search Monsters' handleChange={e =>setSearchField(e.target.value)} /> */}
      <h1>Monster's Rolodex</h1>
      {/* <h1>{title}</h1> */}
      <SearchBox placeholder='Search Monsters' handleChange={handleChange} />
      <CardList monsters={filterMonsters} />
    </div> 
  );
}

export default App;
