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

          <div className="row">
          
            <div className="col-xs-3"id='AwesomeComponent'>
              <AwesomeComponent />
            </div>

            <div className="col-xs-3" id='AddFavorite'>
              <AddFavorite />
            </div>
            
            <div className="col-xs-3" id='GetMovies'>
              <GetMovies />
            </div>

            <div className="col-xs-3" id='GetAPI'>
              <GetAPI />
            </div>
          
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;