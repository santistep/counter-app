import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontStyle: "italic",
    fontFamily: "comicSans",
    fontWeight: "bold",
  };
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h4>Zero</h4> : value;
  }

  getBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    return (
      <div>
        <h4>{this.props.children}</h4>
        <span style={this.styles} className={this.getBadgeColor()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontWeight: "bold" }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
