export const REGISTRATION_INPUT_CHANGE = "REGISTRATION_INPUT_CHANGE";
export const REGISTRATION_SUBMIT = "REGISTRATION_SUBMIT";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CHECK_AUTH = "CHECK_AUTH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_INPUT_CHANGE = "LOGIN_INPUT_CHANGE";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const registrationInputChange = (payload) => ({
  type: REGISTRATION_INPUT_CHANGE,
  payload,
});

export const registrationSubmit = () => ({
  type: REGISTRATION_SUBMIT,
});

export const registrationSuccess = (payload) => ({
  type: REGISTRATION_SUCCESS,
  payload,
});

export const registrationError = (payload) => ({
  type: REGISTRATION_ERROR,
  payload,
});

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
