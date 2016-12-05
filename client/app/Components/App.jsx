import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AwesomeComponent from './AwesomeComponent.jsx';
import AddFavorite from './AddFavorite.jsx';
import GetMovies from './GetMovies.jsx';
import GetAPI from './GetAPI.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // username: username
      favorites: []
    };
  }

  // componentDidMount() {
  //   this.getHYPEM('wily6');
  // }

  // getHYPEM(username) {
  //   this.props.searchHYPEM(options, (username) =>
  //     this.setState({
  //       username: username
  //     })
  //   );
  // }

  componentDidMount() {
    axios.get('/getAPI')
      .then(res => {
        console.log(res.data[0]);
        const favorites = res.data;
        this.setState({ favorites });
      });
  }



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

            <div>
              <ul>
                {this.state.favorites.map(favorite => <li>{favorite.artist} + {favorite.title}</li> 
                  )}
              </ul>
            </div>
          
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;