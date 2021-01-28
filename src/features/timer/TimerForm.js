import React, { useState } from 'react';


import classes from '../../scss/components/TimerForm.module.scss';
import classesCommon from '../../scss/Common.module.scss';


const TimerForm = (props) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');


  const cancelData = (e) => {
    e.preventDefault();
    setTitle('');
    setDate('');
    setTime('');
  }

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const onDateChange = (e) => {
    setDate(e.target.value);
  }

  const onTimeChange = (e) => {
    setTime(e.target.value);
  }

  const addNewTimer = (e) => {
    e.preventDefault();
    if(title && date && time) {
      props.addNewTimer(title, date, time);
      setTitle('');
      setDate('');
      setTime('');
    }
  }

  const toggleAddBtn = () => {
    return (title && date && time) ? `${classesCommon.btn} ${classesCommon.btn__success}` : `${classesCommon.btn} ${classesCommon.btn__stop}`
  }

  return(
    <form className={classes.timer__form}>
        <label htmlFor="timer__text_input">Event Name</label>
        <input 
          type="text"
          name="title" 
          placeholder="Event Name" 
          value={title} 
          id="timer__text_input" 
          className={classes.timer__text_input} 
          onChange={onTitleChange}/>

        <label htmlFor="timer__date_input">Event Date</label>
        <input 
          type="date"
          name="date" 
          value={date}  
          id="timer__date_input"
          className={classes.timer__date_input}
          onChange={onDateChange} />

        <label htmlFor="timer__time_input">Event Time</label>
        <input 
        type="time" 
        step="1"
        name="time"
        value={time}  
        id="timer__time_input" 
        className={classes.timer__time_input} 
        onChange={onTimeChange}/> 

        <div className={classes.timer__btn_container}>
          <button 
            className={`${classesCommon.btn} ${classesCommon.btn__regular}`}
            onClick={cancelData}>Cancel</button>

          <button 
            className={toggleAddBtn()}
            onClick={addNewTimer}>Add</button>
        </div>
      </form>
  )
}

export default TimerForm;

/*
export default class TimerForm extends Component {
  state = {
    title: '',
    date: '',
    time: ''
  }

  cancelData = (e) => {
    e.preventDefault();
    this.setState({
      title: '',
      date: '',
      time: ''
    })
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  addNewTimer = (e) => {
    e.preventDefault();
    if(this.state.title && this.state.date && this.state.time) {
      this.props.addNewTimer(this.state.title, this.state.date, this.state.time);
      this.setState({
        title: '',
        date: '',
        time: ''
      })
    }
  }

  toggleAddBtn = () => {
    return (this.state.title && this.state.date && this.state.time) ? `${classesCommon.btn} ${classesCommon.btn__success}` : `${classesCommon.btn} ${classesCommon.btn__stop}`
  }

  render() {
    return (
      <form className={classes.timer__form}>
        <label htmlFor="timer__text_input">Event Name</label>
        <input 
          type="text"
          name="title" 
          placeholder="Event Name" 
          value={this.state.title} 
          id="timer__text_input" 
          className={classes.timer__text_input} 
          onChange={this.onChange}/>

        <label htmlFor="timer__date_input">Event Date</label>
        <input 
          type="date"
          name="date" 
          value={this.state.date}  
          id="timer__date_input"
          className={classes.timer__date_input}
          onChange={this.onChange} />

        <label htmlFor="timer__time_input">Event Time</label>
        <input 
        type="time" 
        step="1"
        name="time"
        value={this.state.time}  
        id="timer__time_input" 
        className={classes.timer__time_input} 
        onChange={this.onChange}/> 

        <div className={classes.timer__btn_container}>
          <button 
            className={`${classesCommon.btn} ${classesCommon.btn__regular}`}
            onClick={this.cancelData}>Cancel</button>

          <button 
            className={this.toggleAddBtn()}
            onClick={this.addNewTimer}>Add</button>
        </div>
      </form>
    )
  }
}
*/