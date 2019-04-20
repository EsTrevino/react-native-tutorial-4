import firebase from 'firebase';
import { EMAIL_CHANGE, PASSWORD_CHANGE, LOGIN_USER_SUCCESSFUL } from './types';

export const emailChanged = text => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  };
};

export const loginUser = ({ email, password }) => dispatch => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({
        type: LOGIN_USER_SUCCESSFUL,
        payload: user
      });
    })
    .catch(err => console.log(err));
};
