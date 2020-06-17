import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';

import Resume from '../Resume/Resume';


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Daryl Chamberlain</h1>
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
