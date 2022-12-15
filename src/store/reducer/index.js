import {
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from "../action";

const initialState = {
  user: {
    id: "",
    pseudo: "",
    mail: "",
    checkMail: "",
    pwd: "",
    checkPwd: "",
    errorRegistration: "",
    error: "",
    isLogged: false,
  },

  loading: false,
  disconnected: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTRATION_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case REGISTRATION_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          errorRegistration: "",
        },
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          errorRegistration: "",
          isLogged: true,
        },
        disconnected: false,
        loading: false,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          errorRegistration: action.payload,
        },
        disconnected: true,
        loading: false,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          isLogged: true,
        },
        disconnected: false,
        loading: false,
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          error: action.payload,
        },
        loading: false,
        isLogged: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          id: "",
          pseudo: "",
          mail: "",
          checkMail: "",
          pwd: "",
          checkPwd: "",
          errorRegistration: "",
          error: "",
          isLogged: false,
        },
      };
    default:
      return state;
  }
};
