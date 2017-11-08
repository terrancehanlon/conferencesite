import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

// export default class CallToAction extends Component{
// render() {
//   return (
//     <Jumbotron className="App">
//       <h1>Conference 2017</h1>
//       <p>Description of the 2017 Conference</p>
//       <p>Date of Conference</p>
//       <br/>
//       <p><Button bsStyle="primary" bsSize="large">Reserve Seat</Button></p>
//       <p font-size="xx-small">Hurry seats fill fast</p>
//     </Jumbotron>
//   )
// }
// }

const CallToAction = () => (
  <Jumbotron className="App">
    <h1>Conference 2017</h1>
    <p>Description of the 2017 Conference</p>
    <p>Date of Conference</p>
    <br />
    <p><Button bsStyle="primary" bsSize="large">Reserve Seat</Button></p>
    <p style={{ fontSize: '1  em' }}> Hurry seats fill fast</p>
  </Jumbotron>
);

export default CallToAction;
