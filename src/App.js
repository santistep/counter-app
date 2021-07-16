import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 1 },
      { id: 3, value: 1 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    /*clonamos el arreglo */
    const counters = [...this.state.counters];
    /* guardamos los indices de cada counter*/
    const index = counters.indexOf(counter);
    /* guardamos los objetos del arreglo en otro "lugar" (fuera del state)*/
    counters[index] = { ...counter };
    counters[index].value++;
    /* le damos el nuevo estado */
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
