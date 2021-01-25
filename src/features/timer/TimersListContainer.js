import { connect } from 'react-redux';
import TimersList from './TimersList';

const mapStateToProps = state => {
    return { timers: state.timers }
  }
  
  export default connect(mapStateToProps)(TimersList);