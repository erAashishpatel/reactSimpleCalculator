import React from 'react';
import App from "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleAdd = () => {
    this.setState((prevState) => ({
      number: prevState.number + 2,
    }));
  };

  handleSquare = () => {
    this.setState((prevState) => ({
      number: prevState.number * prevState.number,
    }));
  };

  handleDouble = () => {
    this.setState((prevState) => ({
      number: prevState.number * 2,
    }));
  };

  handleDivideBy2 = () => {
    this.setState((prevState) => ({
      number: prevState.number / 2,
    }));
  };

  handleSubtract = () => {
    this.setState((prevState) => ({
      number: prevState.number - 2,
    }));
  };

  render() {
    const { number } = this.state;

    return (
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="display">{number}</div>
        <div className="buttons">
          <button onClick={this.handleAdd}>Add 2</button>
          <button onClick={this.handleSquare}>Square</button>
          <button onClick={this.handleDouble}>Double</button>
          <button onClick={this.handleDivideBy2}>Divide by 2</button>
          <button onClick={this.handleSubtract}>Subtract 2</button>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App;
