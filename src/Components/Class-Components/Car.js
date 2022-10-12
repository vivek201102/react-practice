import React from 'react';
class Car extends React.Component {

  //contructor
  constructor(props) {
    super();
    this.state = {
      color: "Red",
      brand: "KIA",
      model: "Seltos"
    };
  }

  // Called just befor render 
  // In this case still there is method change but color will be green in reder

  //getDerivedStateProps
  /*
  static getDerivedStateFromProps(props, state) {
    return { color: props.color };
  }
  */




  change = () => {
    this.setState(
      { color: "Blue" }
    );
  }

  //render
  render() {
    return (
      <>
        <h2>{this.state.brand} {this.state.model}</h2>
        <h4>Color: {this.state.color}</h4>
        <button onClick={this.change}>Click Me</button>
      </>
    );
  }

  //Component did mount
  componentDidMount() {
    this.setState({ color: "Yellow" })
  }

  shouldComponentUpdate() {

    return false;
  }
}

export default Car;


/**
  Life Cycle of class component
  
  1. Mounting
  2. Updating
  3. Unmounting

  1. Mounting
  -> Mounting means putting elements into the DOM
    - Contructor()
      * called before anything else
      * set up the initial state and other initial values
      * method is called with the props
      * should call first super(props)
      
    - getDerivedStateFromProps(state, props)
      * Called before every render
      * set state with prop value here
      * Takes state as an argument and returns an object with changes to the state
      
    - render
      * method that actually outputs the HTML to the DOM
      
    - componentDidMount
      * Called after component rendered
    
  2. Updating
  -> Component gets updated whenever there is a change in the component's state or props
  
    - getDerivedStateFromProps(state, props)
      * this method is called as soon as component is updated
      
    - shouldComponentUpdate
      * if it is true component should render component at every update
      * if it is false react should not continue rendering
    
    - render
      * it has to re-render the HTML to the DOM with the new changes
      * it will be called whenever component is updated
      
    - getSnapshotBeforeUpdate
      * you have access to the props and state before the update
      * If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
      
    
    - DidComponentUpdate
      * method is called after the component is updated in the DOM 

  3. Unmounting
  -> when a component is removed from the DOM
  
    - componentWillUnmount
      * method is called when the component is about to be removed from the DOM
  
*/