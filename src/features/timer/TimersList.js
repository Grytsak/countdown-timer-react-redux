import React, { Component } from 'react';
import TimerContainer from './TimerContainer';

 const TimersList = (props) => {
     console.log('props:', props);
    return props.timers.map( timer => (
        <li key={timer.id} >
            <TimerContainer timer={timer} />
        </li>
    ));
}

export default TimersList;