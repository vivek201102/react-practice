import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "Blue" }
  }

  message = (a) => {
    alert(a.type);
  }

  render() {
    return (
      <>
        <h2>Car component</h2>
        <p>Company Name: {this.props.model.brand}</p>
        <p>Model Name: {this.props.model.name}</p>
        <button onClick={this.props.changeDetails}>Change Name</button>
        <button onClick={(event) => this.message(event)}>Click</button>
        <button onDoubleClick={(event) => this.message(event)}>Double Click</button>
      </>
    );
  }
}

export default Car;