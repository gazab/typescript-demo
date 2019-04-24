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


const cards = [
  {login: "Gustav", avatar_url:"https://demos.subinsb.com/isl-profile-pic/image/person.png"},
  {login: "Linnea", avatar_url:"https://image.flaticon.com/icons/svg/163/163850.svg"}
];

function App()  {
    return (
      <CardList cards={cards} />
    );
}

export default App;
