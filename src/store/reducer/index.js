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
  GET_CHAPTER,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_ERROR,
  GET_STORYTELLING_SUCCESS,
  GET_STORYTELLING_ERROR,
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

  place: {},
  chapter: {},
  storytelling: [
    {
      id: "",
      sentence: "",
    },
  ],

  counter: {
    chapterCounter: 1,
  },
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
    case GET_CHAPTER:
      return {
        ...state,
      };
    case GET_CHAPTER_SUCCESS:
      console.log(action.payload);
      const payload = action.payload[0];
      return {
        ...state,
        place: {
          placeId: payload["place.id"],
          placeName: payload["place.name"],
          placePicture: payload["place.picture"],
        },
        chapter: [
          {
            chapterId: payload["chapter_id"],
          },
        ],
      };
    case GET_CHAPTER_ERROR:
      return {
        ...state,
      };
    case GET_STORYTELLING_SUCCESS:
      return {
        ...state,
        storytelling: action.payload,
      };
    case GET_STORYTELLING_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};
