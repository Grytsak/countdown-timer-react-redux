import React, { Component } from 'react';
import TimerContainer from './TimerContainer';

export default class TimersList extends Component {
    render() {
        return this.props.timers.map( timer => (
            <li key={timer.id} >
                <TimerContainer timer={timer} />
            </li>
        ));
    }
}