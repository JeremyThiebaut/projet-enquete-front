// import { ON_MUTE, OPEN_MENU } from "../action";
import {
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
} from "../action";

const initialState = {
  // mute: false,
  // open: false,
  user: {
    pseudo: "",
    mail: "",
    checkMail: "",
    pwd: "",
    checkPwd: "",
    errorRegistration: "",
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
      };
    // case ON_MUTE:
    //   return {
    //     ...state,
    //     mute: !state.mute,
    //   };
    // case OPEN_MENU:
    //   return {
    //     ...state,
    //     open: !state.open,
    //   };
    default:
      return state;
  }
};
