import React from 'react';
import { Jumbotron } from 'react-bootstrap';

// export default class Timer extends Component{
//   render(){
//     return(<Jumbotron className="middleScreen">
//       <p>Description of the 2017 Conference</p>
//       <p>Date of Conference</p>
//       <br/>
//       <p><Button bsStyle="primary" bsSize="large">Reserve Seat</Button></p>
//       <p font-size="xx-small">Hurry seats fill fast</p>
//     </Jumbotron>)
//   }
// }

const Timer = () => (
  <Jumbotron className="middleScreen">
    <p> Timer </p>
    <p>Date of Conference</p>
  </Jumbotron>
);

export default Timer;
