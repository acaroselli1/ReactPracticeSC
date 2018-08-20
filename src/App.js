import React, { Component,Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import PageOne from "./components/PageOne";


class App extends Component {
  render() {
    return (
      <Fragment>
        {/* <NavBar /> */}
        <PageOne />
      </Fragment>
    );
  }
}

export default App;
