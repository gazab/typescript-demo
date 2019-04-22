import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="media">
        <img className="mr-3" src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png" style={{'width': '64px'}} alt="Generic placeholder" />
        <div className="media-body">
          <h5 className="mt-0">Username</h5>
        </div>
      </div>
    );
  }
}

export default App;
