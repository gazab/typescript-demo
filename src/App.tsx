import React, { Component } from 'react';
import './App.css';

const Card = (props: any) => {
  return (
    <div className="media">
      <img className="mr-3" src={props.avatar_url} style={{'width': '64px'}} alt="Generic placeholder" />
      <div className="media-body">
        <h5 className="mt-0">{props.login}</h5>
      </div>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <>
        <Card login="Gustav" avatar_url="https://demos.subinsb.com/isl-profile-pic/image/person.png" />
        <Card logi="Linnea" avatar_ur="https://demos.subinsb.com/isl-profile-pic/image/person.png" />
      </>
    );
  }
}

export default App;
