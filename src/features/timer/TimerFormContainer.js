import { connect } from 'react-redux';
import { addNewTimer } from './timerSlice';
import TimerForm from './TimerForm';

const mapStateToProps = state => {
  return { timers: state.timers }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewTimer: (title, date, time) => dispatch(addNewTimer(title, date, time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerForm);