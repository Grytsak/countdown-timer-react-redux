import { createSlice } from '@reduxjs/toolkit';

let nextTimerId = 0;

const timerSlice = createSlice({
  name: 'timers',
  initialState: [],
  reducers: {
    addNewTimer: {
      reducer(state, action) {
        const { id, title, countDownDate } = action.payload;
        // state.splice(0, 1, { id, title, countDownDate });
        state.push({ id, title, countDownDate });
      },
      prepare(title, date, time) {
        return { payload: { id: ++nextTimerId, title, countDownDate: `${date}T${time}`} }
      }
    },
    deleteTimer: {
      reducer(state, action) {
        state.map((timer, index) => {
          if(timer.id === action.payload) {
            state.splice(index, 1);
          }
        })
      }
    }
  }
});

export const { addNewTimer, deleteTimer } = timerSlice.actions;
export default timerSlice.reducer;