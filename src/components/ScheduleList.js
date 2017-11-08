import React from 'react';


const ScheduleList = () => {
  const schedule = [
    { slot: '7:30 - 8:30 AM: TBD' },
    { slot: '8:30 - 9:30 AM: Kristjan Hebert' },
    { slot: '9:30 - 10:30 AM: Ed Usset' },
    { slot: '10:30 - 11:30 AM: Mike Pearson' },
    { slot: '12:30 - 1:30 PM: Dr. Matt Roberts' },
    { slot: '1:30 - 2:30 PM: Dr. Ed Seifried' },
    { slot: '2:30 - 3:30 PM: Elaine Froese' },
    { slot: '3:30 - 4:30 PM: Freddie Barnard' },
    { slot: '4:30 - 5:30 PM: Grant Kosier' },
    { slot: '5:30 - 6:30 PM: Nick Horob' },
    { slot: '6:30 - 7:30 PM: TBD' },
  ];
return (
  <ol align="left">
    {schedule.map(EachSlot =>
    (<li key={EachSlot.slot}>{EachSlot.slot }</li>))}
  </ol>);
};
export default ScheduleList;

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
//     {name: 'tbd'}
