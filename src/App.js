import React, { Component } from "react";

export default class App extends Component {
  dado = () => {
    return <h1>Essa é a mensagem.</h1>;
  };

  soma = () => 10 * 5;

  render() {
    return (
      <div>
        <h2>{this.dado()}</h2>
        <p>{this.soma()}</p>
      </div>
    );
  }
}
