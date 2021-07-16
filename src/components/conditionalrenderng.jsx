import React, { Component } from "react";

class CondRendering extends Component {
  state = {
    tags: [],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <h4>There are no tags!</h4>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderTags()}
        {this.state.tags.length === 0 && "Please create a new tag!"}
      </div>
    );
  }
}

export default CondRendering;
