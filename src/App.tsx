import React, { Component } from 'react';
import './App.css';

function App()  {
  return (
    <div className="media">
        <img className="mr-3" src="https://www.kemi.uu.se/digitalAssets/365/c_365694-l_3-k_no-picture.png" style={{'width': '64px'}} alt="Generic placeholder" />
        <div className="media-body">
          <h5 className="mt-0">Username</h5>
        </div>
      </div>
  );
}

export default App;
