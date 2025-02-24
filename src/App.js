import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
          <p>{this.props.users.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
//debugger;
  // after onClick={() => this.handleOnClickItems()
  // state.items.length = 1 (sa 0 se povecalo na 1)
  if (state.items || state.users){    // users dodan
  return { items: state.items,
    users: state.users}
  }
}

export default connect(mapStateToProps)(App);
// connect takes NEW STATE and updates this.props.items.length in render()
