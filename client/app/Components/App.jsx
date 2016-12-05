import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeComponent from './AwesomeComponent.jsx';
import AddFavorite from './AddFavorite.jsx';
import GetMovies from './GetMovies.jsx';
import GetAPI from './GetAPI.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <p>Hello React!</p>
          
          <div id='AwesomeComponent'>
            <AwesomeComponent />
          </div>

          <div id='AddFavorite'>
            <AddFavorite />
          </div>
          
          <div id='GetMovies'>
            <GetMovies />
          </div>

          <div id='GetAPI'>
            <GetAPI />
          </div>
        
        </div>
        


      </div>
    );
  }
}

export default App;