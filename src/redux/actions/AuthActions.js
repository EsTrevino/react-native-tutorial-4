import firebase from 'firebase';
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';
import { Actions } from 'react-native-router-flux';

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
  dispatch({
    type: LOGIN_USER
  });

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      loginUserSuccess(dispatch, user);
    })
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          loginUserSuccess(dispatch, user);
        })
        .catch(() => {
          loginUserFail(dispatch);
        });
    });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESSFUL,
    payload: user
  });
  Actions.main();
};

const loginUserFail = dispatch => {
  dispatch({
    type: LOGIN_USER_FAIL
  });
};
