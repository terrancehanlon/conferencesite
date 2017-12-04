import React from 'react';
import { shallow, render } from 'enzyme';
import App from './App';
import CallToAction from './components/CallToAction';
import ScheduleList from './components/ScheduleList';
import Timer from './components/Timer';
import Speakers from './components/Speakers';


it('renders without crashing', () => {
  shallow(<App />);
});

it('Renders CallToAction', () => {
  const app = shallow(<App />);
  expect(app.contains(<CallToAction />)).toEqual(true);
});

it('Renders ScheduleList', () => {
  const app = shallow(<App />);
  expect(app.contains(<ScheduleList />)).toEqual(true);
});
it('Renders Speakers', () => {
  const app = shallow(<App />);
  expect(app.contains(<Speakers />)).toEqual(true);
});

it('Renders Timer', () => {
  const app = shallow(<App />);
  expect(app.contains(<Timer />)).toEqual(true);
});

it('CallToAction has content', () => {
  const wrapper = render(<CallToAction title="unique" />);
  expect(wrapper.text()).to.contain('unique').toEqual(true);
});
