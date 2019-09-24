import axios from 'axios';
import { FETCH_USER, LOG_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logUser = input => async dispatch => {
  const res = await axios.post('/auth/login', input);

  dispatch({ type: LOG_USER, payload: res.data });
};
