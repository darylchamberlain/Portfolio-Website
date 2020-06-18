import React from 'react';
import './App.css';

import NavBar from '../NavBar/NavBar';

import SearchBar from '../SearchBar/SearchBar';

import Resume from '../Resume/Resume';


class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="App">
          <SearchBar />
        </div>
          <div className="Resume">
            <Resume />
          </div>
               
      </div>
    )
  }
};

export default App;
