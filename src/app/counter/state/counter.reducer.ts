import {
  increment,
  decrement,
  reset,
  customIncrement,
  changeChannelName,
} from './counter.actions';
import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log(action);
    return {
      ...state,
      counter: state.counter + action.count,
    };
  }),
  on(changeChannelName, (state) => {
    return {
      ...state,
      channelName: environment.CHANNEL_NAME,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
