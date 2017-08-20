import React from 'react';

export class Example extends React.Component {
  render() {
    const src = 'https://facebook.github.io/react/img/logo.svg';
    return (
      <div>
        <h1>React is fun.</h1>
        <img src={src} />
      </div>
    );
  }
}