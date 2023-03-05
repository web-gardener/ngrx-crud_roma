import { createReducer, on } from '@ngrx/store';
import { setAPIStatus } from './app.action';
import { AppState } from './appstate';

export const initialState: Readonly<AppState> = {
  apiResponseMessage: '',
  apiStatus: '',
};

export const AppReducer = createReducer(
  initialState,
  on(setAPIStatus, (state, { apiStatus }) => {
    return {
      ...state,
      ...apiStatus
    };
  })
);