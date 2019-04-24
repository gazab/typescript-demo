import React, { Component } from 'react';
import './App.css';

interface CardProps {
  login: string;
  avatar_url: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="media">
      <img className="mr-3" src={props.avatar_url} style={{'width': '64px'}} alt="Generic placeholder" />
      <div className="media-body">
        <h5 className="mt-0">{props.login}</h5>
      </div>
    </div>
  );
};

const CardList = (props: {cards: CardProps[]}) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
};


const cards: CardProps[] = [];

function App()  {

  const [ users, setUsers ] = React.useState<CardProps[]>(cards);

  function addRandomUser() {
    fetch(`https://api.github.com/users?since=${Math.floor(Math.random()*10000)}`)
    .then(resp => resp.json())
    .then(function(data: CardProps[]) {
        setUsers(users.concat(data[0]));
    });
  }

    return (
      <div>
        <button className="btn btn-primary" onClick={addRandomUser}>Add random user</button>
        <CardList cards={users} />
      </div>
    );
}

export default App;
