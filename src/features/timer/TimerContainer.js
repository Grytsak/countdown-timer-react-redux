import { connect } from 'react-redux';
import Timer from './Timer';
import { deleteTimer } from "./timerSlice";

const mapStateToProps = state => {
  return { timers: state.timers }
}


function mapDispatchToProps(dispatch) {
  return {
    deleteTimer: id => dispatch(deleteTimer(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);