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
  GET_NEXT,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_ERROR,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  TOGGLE_QUESTION_RESPONSE,
  GET_ALL_CHAPTER_SUCCESS,
  GET_ALL_CHAPTER_ERROR,
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

  hide: false,
  character: [],
  question: [],
  place: {},
  chapter: {},
  storytelling: [
    {
      id: "",
      sentence: "",
    },
  ],

  counter: {
    allChapter: 0,
    chapterCounter: 1,
    storyCounter: 1,
    questionCounter: 1,
    situationCounter: 1,
    characterCounter: 1,
    shouldDisplayQuestion: false,
    shouldDisplayChapter: true,
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
    case GET_NEXT:
      return {
        ...state,
        hide: true,
        counter: {
          ...state.counter,
          ...setCompter(state),
        },
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: [...action.payload],
      };
    case GET_CHARACTER_ERROR:
      return {
        ...state,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        hide: !state.hide,
      };
    case GET_QUESTION_ERROR:
      return {
        ...state,
      };
    case TOGGLE_QUESTION_RESPONSE:
      return {
        ...state,
        hide: !state.hide,
      };
    case GET_ALL_CHAPTER_SUCCESS:
      return {
        ...state,
        counter: {
          ...state.counter,
          allChapter: action.payload,
        },
      };
    case GET_ALL_CHAPTER_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};

var setCompter = (oldState) => {
  const state = { ...oldState };
  console.log("question : ", state.question);

  if (state.counter.chapterCounter !== state.counter.allChapter - 1) {
    state.counter.shouldDisplayChapter = true;
    if (state.counter.storyCounter < state.storytelling.length) {
      // alert("story incrementation");
      state.counter.storyCounter++;
      state.counter.shouldDisplayQuestion = false;
      // Vérifier si storyCounter === longueur tableau - 1 && questions.length
    } else if (
      state.counter.storyCounter === state.storytelling.length &&
      state.question.length &&
      !state.counter.shouldDisplayQuestion
    ) {
      state.counter.shouldDisplayQuestion = true;
    } else if (state.counter.questionCounter < state.question.length) {
      // alert("question incrementation");
      state.counter.questionCounter++;
      //Vérifier si arrivé au bout des questions || (pas de question && aubout des story
    } else if (
      state.counter.questionCounter === state.question.length ||
      (state.question.length === 0 &&
        state.counter.storyCounter === state.storytelling.length)
    ) {
      state.counter.shouldDisplayQuestion = false;

      // alert("chapter incrementation");
      state.counter.chapterCounter++;
      state.counter.situationCounter++;
      state.counter.questionCounter = 1;
      state.counter.storyCounter = 1;
    }

    return state.counter;
  } else {
    if (state.counter.chapterCounter < state.counter.allChapter) {
      state.counter.chapterCounter++;
    }
    state.counter.shouldDisplayChapter = false;
    return state.counter;
  }
};
