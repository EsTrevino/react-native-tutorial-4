import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESSFUL
} from '../actions/types';

const initialState = { email: '', password: '', user: null };

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESSFUL:
      return { ...state, user: user };
    default:
      return state;
  }
};
