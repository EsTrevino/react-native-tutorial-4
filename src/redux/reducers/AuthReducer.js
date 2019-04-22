import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_USER_SUCCESSFUL,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const initialState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESSFUL:
      return { ...state, ...initialState, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        password: '',
        error: 'Authentication Failed',
        loading: false
      };
    case LOGIN_USER:
      return { ...state, loading: true };
    default:
      return state;
  }
};
