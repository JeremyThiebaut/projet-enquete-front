import { ON_MUTE, OPEN_MENU } from "../action";

const initialState = {
  mute: false,
  open: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_MUTE:
      return {
        ...state,
        mute: !state.mute,
      };
    case OPEN_MENU:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
