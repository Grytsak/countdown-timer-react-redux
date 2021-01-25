import React, { Component } from 'react';
import store from '../../app/store';
import watch from 'redux-watch';

import classes from '../../scss/components/Timer.module.scss';

export default class Timer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    message: ''
  }

  interval = '';

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0, message: 'Countdown is finished!' });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  
  showPorps = () => {
    const countDownDate = this.props.timer.countDownDate;
    console.log('countDownDate:', countDownDate);
  }

  componentDidMount() {
    const countDownDate = this.props.timer.countDownDate;
      if(Date.parse(countDownDate) - Date.parse(new Date()) <= 0) {
        this.setState({days: 0, hours: 0, minutes: 0, seconds: 0, message: 'You picked date before now'});
      } else {
        this.setState({message: ''});
        this.interval = setInterval(() => this.getTimeUntil(countDownDate), 1000);
      }



    // let w = watch(store.getState, 'timers.0.countDownDate')
    // this.unsubscribe = store.subscribe(w((newVal, oldVal, objectPath) => {
    //   console.log(`${objectPath} changed from ${oldVal} to ${newVal}`)

    //   if(this.interval) {
    //     clearInterval(this.interval);
    //   }

    //   if(Date.parse(newVal) - Date.parse(oldVal) <= 0 || Date.parse(newVal) - Date.parse(new Date()) <= 0) {
    //     this.setState({days: 0, hours: 0, minutes: 0, seconds: 0, message: 'You picked date before now'});
    //   } else {
    //     this.setState({message: ''});
    //     let deadline = newVal; 
    //     this.interval = setInterval(() => this.getTimeUntil(deadline), 1000);
    //   }
    // }))
  }

  
  render() {
    return (
      <div className={classes.timer} onClick={this.showPorps}>
        <span className={classes.timer__delete} onClick={() => this.props.deleteTimer(this.props.timer.id)}>x</span>
        <h2 className={classes.timer__title}>{this.props.timer.title ? this.props.timer.title : 'Event Name'}</h2>
        <div className={classes.timer__date_container}>
        
        <div className={classes.timer__date_block}>
          <p id="timer-days" className={classes.timer__date_number}>{this.state.days}</p>
          <p className={classes.timer__date_text}>Days</p>
          </div>
          
          <div className={classes.timer__date_block}>
          <p id="timer-hours" className={classes.timer__date_number}>{this.state.hours}</p>
          <p className={classes.timer__date_text}>Hours</p>
          </div>
          
          <div className={classes.timer__date_block}>
          <p id="timer-minutes" className={classes.timer__date_number}>{this.state.minutes}</p>
          <p className={classes.timer__date_text}>Minutes</p>
          </div>
          
          <div className={classes.timer__date_block}>
          <p id="timer-seconds" className={classes.timer__date_number}>{this.state.seconds}</p>
          <p className={classes.timer__date_text}>Seconds</p>
          </div>
        </div>
        <p className={classes.timer__message}>{this.state.message}</p>
      </div>
      )
    }
  }
  