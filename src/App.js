import { Provider } from 'react-redux';
import store from './app/store';

import TimerFormContainer from './features/timer/TimerFormContainer';
import TimersListContainer from './features/timer/TimersListContainer';

import classes from './scss/Common.module.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <h1>Countdown Timer</h1>
        <TimerFormContainer />
        <ul className={classes.timers_list}>
          <TimersListContainer />
        </ul>
      </div>
    </Provider>  
  );
}

export default App;
