/**
 * /* eslint-disable no-unreachable
 *
 * @format
 */

import axios from 'axios';
import { ALL_USERS, REGISTER, LOGIN, LOGINGOOGLE } from './actionNames';
const serverUrl = 'localhost';

export const getAllUsers = () => {
  return async dispatch => {
    var results = await axios.get(`http://${serverUrl}:3001/users`);
    return dispatch({
      type: ALL_USERS,
      payload: results.data,
    });
  };
};
export function register(payload) {
  return function (dispatch) {
    axios
      .post(`http://${serverUrl}:3001/register`, payload)
      .then(data => {
        return dispatch({ type: REGISTER, payload: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function login(payload) {
  return function (dispatch) {
    axios
      .post(`http://${serverUrl}:3001/login`, payload)
      .then(data => {
        return dispatch({ type: LOGIN, payload: data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
}
export function loginGoogle() {
  // fetch('http://localhost:5000/auth/login/success', {
  //   method: 'GET',
  //   credentials: 'include',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Credentials': true,
  //   },
  // })
  //   .then(response => {
  //     if (response.status === 200) return response.json();
  //     throw new Error('authentication has been failed!');
  //   })
  //   .then(resObject => {
  //     return dispatch({ type: LOGINGOOGLE, payload: resObject.user });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}
