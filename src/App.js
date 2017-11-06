import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';

class ScheduleList extends React.Component{
  render(){
  const schedule =[
  {slot: '7:30 - 8:30 AM: TBD'},
  {slot: '8:30 - 9:30 AM: Kristjan Hebert'},
  {slot: '9:30 - 10:30 AM: Ed Usset'},
  {slot: '10:30 - 11:30 AM: Mike Pearson'},
  {slot: '12:30 - 1:30 PM: Dr. Matt Roberts'},
  {slot: '1:30 - 2:30 PM: Dr. Ed Seifried'},
  {slot: '2:30 - 3:30 PM: Elaine Froese'},
  {slot: '3:30 - 4:30 PM: Freddie Barnard'},
  {slot: '4:30 - 5:30 PM: Grant Kosier'},
  {slot: '5:30 - 6:30 PM: Nick Horob'},
  {slot: '6:30 - 7:30 PM: TBD'}
]
 return <ol align='left'>
   {schedule.map(EachSlot => (<li key={EachSlot.slot}>
     {EachSlot.slot}</li>)) } </ol>

}
}

class App extends Component {
  //Header, Description of page
  renderJumbotron() {
    return (
      <Jumbotron className="App">
        <h1>Conference 2017</h1>
        <p>Description of the 2017 Conference</p>
        <p>Date of Conference</p>
        <br/>
        <p><Button bsStyle="primary" bsSize="large">Reserve Seat</Button></p>
        <p font-size="xx-small">Hurry seats fill fast</p>
      </Jumbotron>
    )
  }
  //Timer
  renderJumbotron2(){
    return(<Jumbotron className="middleScreen">
      <p>Description of the 2017 Conference</p>
      <p>Date of Conference</p>
      <br/>
      <p><Button bsStyle="primary" bsSize="large">Reserve Seat</Button></p>
      <p font-size="xx-small">Hurry seats fill fast</p>
    </Jumbotron>)
  }
// class RenderNames extends React.Component{
//   render(){
//   const speakers=[
//     {name: 'tbd'},
//     {name: 'Kristjan Hebert'},
//     {name: 'Ed Usset'},
//     {name: 'Mike Pearson'},
//     {name: 'Dr. Matt Roberts'},
//     {name: 'Dr. Ed Seifried'},
//     {name: 'Jack Uldrich'},
//     {name: 'Freddie Barnard'},
//     {name: 'Grant Kosier'},
//     {name: 'Nick Horob'},
//     {name: 'tbd'},
//   ]
//
//
//
// }
// }
  //speakers
  renderJumbotron3(){
    return(<Jumbotron className="App">
      <p><strong>Speakers</strong></p>
      <br/>

    </Jumbotron>)
  }

  render() {
    return (
      <div className="App">
        <header>
          {this.renderJumbotron()}
        </header>
        <p>
          {this.renderJumbotron2()}
        </p>
        <p>
          {this.renderJumbotron3()}
        </p>


      </div>
    );
  }
}

export default App;
