import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_FETCH_SUCCESS
} from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({ props, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { props, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({
        name,
        phone,
        shift
      })
      .then(() => {
        dispatch({
          type: EMPLOYEE_CREATE
        });
        Actions.pop();
      });
  };
};

export const employeeFetch = () => dispatch => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch({
        type: EMPLOYEE_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
};
