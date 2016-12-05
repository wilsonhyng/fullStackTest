import React from 'react';
import ReactDOM from 'react-dom';

import AwesomeComponent from './Components/AwesomeComponent.jsx';
import AddFavorite from './Components/AddFavorite.jsx';
import GetMovies from './Components/GetMovies.jsx';
import GetAPI from './Components/GetAPI.jsx';

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

ReactDOM.render(<App />, document.getElementById('app'));