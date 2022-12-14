// export const OPEN_MENU = "OPEN_MENU";
// export const ON_MUTE = "ON_MUTE";

// export const onMute = () => ({
//   type: ON_MUTE,
// });

// export const openMenu = () => ({
//   type: OPEN_MENU,
// });

export const REGISTRATION_INPUT_CHANGE = "REGISTRATION_INPUT_CHANGE";
export const REGISTRATION_SUBMIT = "REGISTRATION_SUBMIT";
export const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
export const REGISTRATION_ERROR = "REGISTRATION_ERROR";
export const CHECK_AUTH = "CHECK_AUTH";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

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
