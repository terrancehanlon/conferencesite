import React, { Component } from 'react';
import CallToAction from './components/CallToAction';
import Timer from './components/Timer';
import Speakers from './components/Speakers';
import ScheduleList from './components/ScheduleList'

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header> <CallToAction /> </header>
          <Timer />
          <Speakers />
          <ScheduleList />
      </div>
    );
  }
}
/* eslint-enable react/prefer-stateless-function */
export default App;
