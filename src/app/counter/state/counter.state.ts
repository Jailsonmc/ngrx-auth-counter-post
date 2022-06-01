import { environment } from "src/environments/environment";

export interface CounterState {
  counter: number;
  channelName: string;
}

export const initialState: CounterState = {
  counter: 4,
  channelName: environment.CHANNEL_NAME_DEFAULT,
};
