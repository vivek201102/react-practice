import React from 'react';

class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { head: props.head }
  }

  componentWillUnmount() {
    alert("Title will be removed!!!");
  }

  render() {

    return (
      <>
        <h1>{this.state.head}</h1>
      </>
    );
  }
}

export default header;