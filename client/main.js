import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <h1>hello there!</h1>
  );
}

Meteor.startup(() => {
  ReactDOM.render(<App /> , document.querySelector('.render-target'));
})
